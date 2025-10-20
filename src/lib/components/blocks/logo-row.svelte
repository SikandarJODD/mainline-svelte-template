<script lang="ts">
	import { cn } from '$lib/utils';

	type Company = {
		name: string;
		logo: string;
		width: number;
		height: number;
		href: string;
	};

	type Props = {
		companies: Company[];
		gridClassName: string;
		direction?: 'left' | 'right';
	};

	let { companies, gridClassName, direction = 'left' }: Props = $props();
</script>

<!-- Desktop static version -->
<div class="hidden md:block">
	<div class={cn('grid items-center justify-items-center gap-x-20 lg:gap-x-28', gridClassName)}>
		{#each companies as company, index (index)}
			<a href={company.href} target="_blank" rel="noopener noreferrer">
				<img
					src={company.logo}
					alt="{company.name} logo"
					width={company.width}
					height={company.height}
					class="object-contain opacity-50 transition-opacity hover:opacity-70 dark:invert dark:opacity-70 dark:hover:opacity-100"
				/>
			</a>
		{/each}
	</div>
</div>

<!-- Mobile marquee version -->
<div class="md:hidden">
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="marquee-container"
		data-direction={direction}
		onmouseenter={(e) => {
			const container = e.currentTarget;
			const marquee = container.querySelector('.marquee-content');
			if (marquee instanceof HTMLElement) {
				marquee.style.animationPlayState = 'paused';
			}
		}}
		onmouseleave={(e) => {
			const container = e.currentTarget;
			const marquee = container.querySelector('.marquee-content');
			if (marquee instanceof HTMLElement) {
				marquee.style.animationPlayState = 'running';
			}
		}}
	>
		<div class="marquee-content" data-direction={direction}>
			{#each companies as company, index (index)}
				<a
					href={company.href}
					target="_blank"
					rel="noopener noreferrer"
					class="mx-8 inline-block transition-opacity hover:opacity-70"
				>
					<img
						src={company.logo}
						alt="{company.name} logo"
						width={company.width}
						height={company.height}
						class="object-contain dark:invert"
					/>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.marquee-container {
		position: relative;
		width: 100%;
		overflow: hidden;
	}

	.marquee-content {
		display: flex;
		white-space: nowrap;
		will-change: transform;
	}

	.marquee-content[data-direction='left'] {
		animation: marquee-left 20s linear infinite;
	}

	.marquee-content[data-direction='right'] {
		animation: marquee-right 20s linear infinite;
	}

	@keyframes marquee-left {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	@keyframes marquee-right {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(0%);
		}
	}
</style>
