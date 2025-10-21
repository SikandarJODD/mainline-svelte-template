<script lang="ts">
	import { cn } from '$lib/utils';
	import Marquee from '../magic/marquee.svelte';

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
					alt={`${company.name} logo`}
					width={company.width}
					height={company.height}
					class="dark:opacity-100 object-contain opacity-50 transition-opacity hover:opacity-70 dark:invert"
				/>
			</a>
		{/each}
	</div>
</div>

<!-- Mobile marquee version -->
<div class="md:hidden">
		<Marquee
			pauseOnHover={true}
			reverse={direction === 'right'}
			repeat={2}
			class="w-full [--duration:20s]"
		>
			{#each companies as company}
				<a
					href={company.href}
					target="_blank"
					rel="noopener noreferrer"
					class="mx-8 inline-block transition-opacity hover:opacity-70"
				>
					<img
						src={company.logo}
						alt={`${company.name} logo`}
						width={company.width}
						height={company.height}
						class="object-contain"
					/>
				</a>
			{/each}
		</Marquee>
</div>

<!-- Marquee styling is now handled by Marquee.svelte -->
