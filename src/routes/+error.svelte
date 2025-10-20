<script lang="ts">
	import { page } from '$app/stores';
	import { ArrowLeft } from '@lucide/svelte';
	import Background from '$lib/components/other/background.svelte';
	import { Button } from '$lib/components/ui/button';

	// Get error details from the page store using Svelte 5 runes
	let status = $derived($page.status);
	let errorMessage = $derived($page.error?.message || 'An unexpected error occurred');

	// Determine the error title and description based on status
	let errorTitle = $derived(status === 404 ? 'Page Not Found' : `Error ${status}`);
	let errorDescription = $derived(
		status === 404
			? "Sorry, we couldn't find the page you're looking for. The page might have been removed or the URL might be incorrect."
			: errorMessage
	);
</script>

<Background>
	<div
		class="container flex min-h-[70vh] flex-col items-center justify-center py-28 text-center lg:min-h-[80vh] lg:py-32"
	>
		<div class="relative z-10 max-w-2xl">
			<h1
				class="from-foreground to-foreground/70 relative mb-6 bg-gradient-to-br bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl lg:text-7xl"
			>
				{errorTitle}
			</h1>

			<p class="text-muted-foreground mb-10 text-xl">
				{errorDescription}
			</p>

			<div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
				<Button href="/" class="group min-w-[200px] gap-2" size="lg">
					<ArrowLeft class="size-5 transition-transform group-hover:-translate-x-1" />
					Back to Home
				</Button>
				<Button href="/contact" variant="outline" size="lg" class="min-w-[200px]">
					Contact Support
				</Button>
			</div>
		</div>
	</div>
</Background>
