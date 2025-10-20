<script lang="ts">
	import { Check, ChevronsUpDown, X } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		Collapsible,
		CollapsibleContent,
		CollapsibleTrigger
	} from '$lib/components/ui/collapsible';

	interface Feature {
		name: string;
		free: string | boolean;
		startup: string | boolean;
		enterprise: string | boolean;
	}

	interface FeatureSection {
		category: string;
		features: Feature[];
	}

	let selectedPlan = $state(1); // Default to Startup plan

	const pricingPlans = [
		{
			name: 'Free',
			button: {
				text: 'Get started',
				variant: 'outline' as const
			}
		},
		{
			name: 'Startup',
			button: {
				text: 'Get started',
				variant: 'outline' as const
			}
		},
		{
			name: 'Enterprise',
			button: {
				text: 'Get a demo',
				variant: 'outline' as const
			}
		}
	];

	const comparisonFeatures: FeatureSection[] = [
		{
			category: 'Usage',
			features: [
				{
					name: 'Members',
					free: 'Unlimited',
					startup: 'Unlimited',
					enterprise: 'Unlimited'
				},
				{
					name: 'Teams',
					free: '2',
					startup: 'Unlimited',
					enterprise: 'Unlimited'
				},
				{
					name: 'Issues',
					free: '500',
					startup: 'Unlimited',
					enterprise: 'Unlimited'
				}
			]
		},
		{
			category: 'Features',
			features: [
				{
					name: 'Mainline AI',
					free: false,
					startup: true,
					enterprise: true
				},
				{
					name: 'Mainline Insights',
					free: false,
					startup: true,
					enterprise: true
				},
				{
					name: 'Admin roles',
					free: false,
					startup: true,
					enterprise: true
				}
			]
		}
	];

	let isOpen = $state(false);

	// function getFeatureValue(value: string | boolean) {
	// 	if (typeof value === 'boolean') {
	// 		return value ? (
	// 			<Check class="size-4" />
	// 		) : (
	// 			<X class="text-muted-foreground size-4" />
	// 		);
	// 	}
	// 	return value;
	// }
</script>

<section class="pb-28 lg:py-32">
	<div class="container">
		<!-- Plan Headers -->
		<div class="">
			<!-- Mobile View -->
			<div class="md:hidden">
				<Collapsible bind:open={isOpen} >
					<div class="flex items-center justify-between border-b py-4">
						<h3 class="text-lg font-semibold">
							{pricingPlans[selectedPlan].name}
						</h3>
						<CollapsibleTrigger >
							<Button variant="ghost" size="sm">
								<ChevronsUpDown class="size-4" />
							</Button>
						</CollapsibleTrigger>
					</div>
					<CollapsibleContent class="space-y-2 pt-4">
						{#each pricingPlans as plan, index}
							{#if index !== selectedPlan}
								<button
									class="text-muted-foreground hover:text-foreground w-full py-2 text-left text-sm transition-colors"
									onclick={() => {
										selectedPlan = index;
										isOpen = false;
									}}
								>
									{plan.name}
								</button>
							{/if}
						{/each}
					</CollapsibleContent>
				</Collapsible>
			</div>

			<!-- Desktop View -->
			<div class="grid grid-cols-4 gap-4 max-md:hidden">
				<div class="col-span-1 max-md:hidden"></div>

				{#each pricingPlans as plan}
					<div class="">
						<h3 class="mb-3 text-2xl font-semibold">{plan.name}</h3>
						<Button variant={plan.button.variant} class="">
							{plan.button.text}
						</Button>
					</div>
				{/each}
			</div>
		</div>

		<!-- Feature Sections -->
		{#each comparisonFeatures as section}
			<div class="">
				<div class="border-primary/40 border-b py-4">
					<h3 class="text-lg font-semibold">{section.category}</h3>
				</div>
				{#each section.features as feature}
					<div
						class="text-foreground grid grid-cols-2 font-medium max-md:border-b md:grid-cols-4"
					>
						<div class="border-primary/40 py-4 md:border-b">
							{feature.name}
						</div>
						<div class="text-muted-foreground border-primary/40 py-4 md:hidden md:border-b">
							{#if typeof feature[Object.keys(pricingPlans[selectedPlan])[0].toLowerCase()] === 'boolean'}
								{#if feature[Object.keys(pricingPlans[selectedPlan])[0].toLowerCase()]}
									<Check class="size-4" />
								{:else}
									<X class="text-muted-foreground size-4" />
								{/if}
							{:else}
								<span class="text-muted-foreground">
									{feature[
										Object.keys(pricingPlans[selectedPlan])[0].toLowerCase()
									]}
								</span>
							{/if}
						</div>
						{#each pricingPlans as plan, index}
							<div
								class="text-muted-foreground border-primary/40 py-4 max-md:hidden md:border-b"
							>
								{#if typeof feature[plan.name.toLowerCase()] === 'boolean'}
									{#if feature[plan.name.toLowerCase()]}
										<Check class="size-4" />
									{:else}
										<X class="text-muted-foreground size-4" />
									{/if}
								{:else}
									<span class="text-muted-foreground">
										{feature[plan.name.toLowerCase()]}
									</span>
								{/if}
							</div>
						{/each}
					</div>
				{/each}
			</div>
		{/each}
	</div>
</section>
