<script lang="ts">
	import Check from '@lucide/svelte/icons/check';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Switch } from '$lib/components/ui/switch';
	import { cn } from '$lib/utils';

	interface PricingProps {
		className?: string;
	}

	let { className = '' }: PricingProps = $props();

	let isAnnual = $state(true);

	const plans = [
		{
			name: 'Free',
			monthlyPrice: '$0',
			yearlyPrice: '$0',
			description: 'Free for everyone',
			features: [
				'Unlimited members',
				'2 teams',
				'500 issues',
				'Slack and Github integrations'
			]
		},
		{
			name: 'Startup',
			monthlyPrice: '$8',
			yearlyPrice: '$6',
			features: [
				'All free plan features and...',
				'Mainline AI',
				'Unlimited teams',
				'Unlimited issues and file uploads',
				'Mainline Insights',
				'Admin roles'
			]
		},
		{
			name: 'Enterprise',
			monthlyPrice: '$8',
			yearlyPrice: '$6',
			features: [
				'All free plan features and...',
				'Mainline AI',
				'Supermainline AGI',
				'Free daily catered lunch',
				'random HIPPA audits'
			]
		}
	];
</script>

<section class={cn('py-28 lg:py-32', className)}>
	<div class="container max-w-5xl">
		<div class="space-y-4 text-center">
			<h2 class="text-2xl tracking-tight md:text-4xl lg:text-5xl">Pricing</h2>
			<p class="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
				Use Mainline for free with your whole team. Upgrade to enable unlimited issues,
				enhanced security controls, and additional features.
			</p>
		</div>

		<div class="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-20">
			{#each plans as plan}
				<Card
					class={cn(
						plan.name === 'Startup' ? 'outline-primary origin-top outline-4' : ''
					)}
				>
					<CardContent class="flex flex-col gap-7 px-6 py-5">
						<div class="space-y-2">
							<h3 class="text-foreground font-semibold">{plan.name}</h3>
							<div class="space-y-1">
								<div class="text-muted-foreground text-lg font-medium">
									{isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
									{#if plan.name !== 'Free'}
										<span class="text-muted-foreground">
											per user/{isAnnual ? 'year' : 'month'}
										</span>
									{/if}
								</div>
							</div>
						</div>

						{#if plan.name !== 'Free'}
							<div class="flex items-center gap-2">
								<Switch
									checked={isAnnual}
									onCheckedChange={() => (isAnnual = !isAnnual)}
									aria-label="Toggle annual billing"
								/>
								<span class="text-sm font-medium">Billed annually</span>
							</div>
						{:else}
							<span class="text-muted-foreground text-sm">{plan.description}</span>
						{/if}

						<div class="space-y-3">
							{#each plan.features as feature}
								<div class="text-muted-foreground flex items-center gap-1.5">
									<Check class="size-5 shrink-0" />
									<span class="text-sm">{feature}</span>
								</div>
							{/each}
						</div>

						<Button class="w-fit" variant={plan.name === 'Startup' ? 'default' : 'outline'}>
							Get started
						</Button>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>
