<script lang="ts">
	import { z } from 'zod';
	import Background from '$lib/components/other/background.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader } from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import * as Field from '$lib/components/ui/field';
	import { signupSchema, type SignupSchema } from '$lib/schemas/auth';

	let formData = $state<SignupSchema>({
		name: '',
		email: '',
		password: ''
	});

	let errors = $state<Partial<Record<keyof SignupSchema, string>>>({});
	let isSubmitting = $state(false);

	function validateForm() {
		try {
			signupSchema.parse(formData);
			errors = {};
			return true;
		} catch (error) {
			if (error instanceof z.ZodError) {
				const newErrors: Partial<Record<keyof SignupSchema, string>> = {};
				error.errors.forEach((err) => {
					if (err.path[0]) {
						newErrors[err.path[0] as keyof SignupSchema] = err.message;
					}
				});
				errors = newErrors;
			}
			return false;
		}
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		isSubmitting = true;

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1000));

		console.log('Signup data:', formData);
		isSubmitting = false;
	}
</script>

<Background>
	<section class="py-28 lg:pt-44 lg:pb-32">
		<div class="container">
			<div class="flex flex-col gap-4">
				<Card class="mx-auto w-full max-w-sm">
					<CardHeader class="flex flex-col items-center space-y-0">
						<img
							src="/logo.svg"
							alt="logo"
							width="94"
							height="18"
							class="mb-7 dark:invert"
						/>
						<p class="mb-2 text-2xl font-bold">Start your free trial</p>
						<p class="text-muted-foreground">Sign up in less than 2 minutes.</p>
					</CardHeader>
					<CardContent>
						<form onsubmit={handleSubmit} class="grid gap-4">
							<Field.Field data-invalid={errors.name ? true : undefined}>
								<Field.Label for="name">Name</Field.Label>
								<Input
									id="name"
									type="text"
									placeholder="Enter your name"
									bind:value={formData.name}
									aria-invalid={errors.name ? true : undefined}
									required
								/>
								{#if errors.name}
									<Field.Error>{errors.name}</Field.Error>
								{/if}
							</Field.Field>

							<Field.Field data-invalid={errors.email ? true : undefined}>
								<Field.Label for="email">Email</Field.Label>
								<Input
									id="email"
									type="email"
									placeholder="Enter your email"
									bind:value={formData.email}
									aria-invalid={errors.email ? true : undefined}
									required
								/>
								{#if errors.email}
									<Field.Error>{errors.email}</Field.Error>
								{/if}
							</Field.Field>

							<Field.Field data-invalid={errors.password ? true : undefined}>
								<Field.Label for="password">Password</Field.Label>
								<Input
									id="password"
									type="password"
									placeholder="Enter your password"
									bind:value={formData.password}
									aria-invalid={errors.password ? true : undefined}
									required
								/>
								<Field.Description>Must be at least 8 characters with uppercase, lowercase, and numbers.</Field.Description>
								{#if errors.password}
									<Field.Error>{errors.password}</Field.Error>
								{/if}
							</Field.Field>

							<Button type="submit" class="mt-2 w-full" disabled={isSubmitting}>
								{isSubmitting ? 'Creating account...' : 'Create an account'}
							</Button>

							<Button variant="outline" class="w-full" type="button">
								<svg class="mr-2 size-5" viewBox="0 0 48 48">
									<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
									<path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
									<path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
									<path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
								</svg>
								Sign up with Google
							</Button>
						</form>

						<div class="text-muted-foreground mx-auto mt-8 flex justify-center gap-1 text-sm">
							<p>Already have an account?</p>
							<a href="/login" class="text-primary font-medium">Log in</a>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	</section>
</Background>
