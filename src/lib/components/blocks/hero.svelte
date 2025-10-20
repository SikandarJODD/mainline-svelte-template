<script lang="ts">
	import { ArrowRight, Blend, ChartNoAxesColumn, CircleDot, Diamond } from '@lucide/svelte';
	import DashedLine from '../other/dashed-line.svelte';
	import { Button } from '$lib/components/ui/button';

	const features: Array<{
		title: string;
		description: string;
		icon: any;
	}> = [
		{
			title: 'Tailored workflows',
			description: 'Track progress across custom issue flows for your team.',
			icon: CircleDot
		},
		{
			title: 'Cross-team projects',
			description: 'Collaborate across teams and departments.',
			icon: Blend
		},
		{
			title: 'Milestones',
			description: 'Break projects down into concrete phases.',
			icon: Diamond
		},
		{
			title: 'Progress insights',
			description: 'Track scope, velocity, and progress over time.',
			icon: ChartNoAxesColumn
		}
	];
</script>

<section class="py-28 lg:py-32 lg:pt-44">
	<div class="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
		<!-- Left side - Main content -->
		<div class="flex-1">
			<h1
				class="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl xl:whitespace-nowrap"
			>
				Mainline Next.js template
			</h1>

			<p class="text-muted-foreground text-1xl mt-5 md:text-3xl">
				Mainline is an open-source website template built with shadcn/ui, Tailwind 4 & Next.js
			</p>

			<div class="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
				<Button>
					<a href="https://github.com/shadcnblocks/mainline-nextjs-template">Get template</a>
				</Button>
				<Button
					variant="outline"
					class="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
				>
					<a href="https://shadcnblocks.com" class="flex items-center gap-2">
						shadcnblocks.com
						<ArrowRight class="size-4" />
					</a>
				</Button>
			</div>
		</div>

		<!-- Right side - Features Grid -->
		<div
			class="grid max-w-[360px] grid-cols-2 gap-x-4 gap-y-6 md:gap-x-12 md:gap-y-12 lg:max-w-96"
		>
			{#each features as feature, i}
				<div class="space-y-2">
					<div
						class="text-muted-foreground flex size-10 items-center justify-center rounded-xl border shadow md:size-14"
					>
						<svelte:component this={feature.icon} class="size-5 md:size-7" />
					</div>
					<h3 class="font-medium">{feature.title}</h3>
					<p class="text-muted-foreground text-sm leading-snug">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>

	<!-- Hero Image -->
	<div class="relative mx-auto mt-8 w-[min(90%,1200px)] overflow-hidden rounded-3xl md:mt-12 lg:mt-20">
		<img
			src="/hero.webp"
			alt="Mainline dashboard mockup"
			class="w-full object-cover object-left-top"
		/>
		<div class="from-background absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent"></div>
	</div>

	<DashedLine class="mt-28 lg:mt-32" />
</section>
