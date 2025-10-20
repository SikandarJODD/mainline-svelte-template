<script lang="ts">
	import { Check } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Switch } from '$lib/components/ui/switch';
	import { Label } from '$lib/components/ui/label';
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

		<!-- Billing Toggle -->
		<div class="mt-8 flex items-center justify-center gap-3 md:mt-12">
			<Label class="text-muted-foreground text-sm" for="billing-toggle">
				Bill monthly
			</Label>
			<Switch id="billing-toggle" checked={isAnnual} onCheckedChange={(checked) => (isAnnual = checked)} />
			<Label class="text-sm" for="billing-toggle">
				Bill annually <span class="text-muted-foreground">(Save 20%)</span>
			</Label>
		</div>

		<!-- Pricing Cards -->
		<div class="mt-8 grid gap-6 md:mt-12 md:grid-cols-3">
			{#each plans as plan}
				<Card class="relative flex flex-col">
					<CardContent class="flex flex-1 flex-col p-6">
						<div class="mb-6">
							<h3 class="mb-2 text-2xl font-bold">{plan.name}</h3>
							{#if plan.description}
								<p class="text-muted-foreground text-sm">{plan.description}</p>
							{/if}
							<div class="mt-4 flex items-baseline gap-1">
								<span class="text-4xl font-bold">
									{isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
								</span>
								<span class="text-muted-foreground text-sm">/month</span>
							</div>
						</div>

						<ul class="mb-6 flex-1 space-y-3">
							{#each plan.features as feature}
								<li class="flex items-start gap-3">
									<Check class="text-primary mt-0.5 size-5 shrink-0" />
									<span class="text-sm">{feature}</span>
								</li>
							{/each}
						</ul>

						<Button class="w-full" variant={plan.name === 'Startup' ? 'default' : 'outline'}>
							Get started
						</Button>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>
