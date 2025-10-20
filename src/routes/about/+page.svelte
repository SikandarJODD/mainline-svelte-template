<script lang="ts">
	import Background from '$lib/components/other/background.svelte';
	import About from '$lib/components/blocks/about.svelte';
	import AboutHero from '$lib/components/blocks/about-hero.svelte';
	import Investors from '$lib/components/blocks/investors.svelte';
	import DashedLine from '$lib/components/other/dashed-line.svelte';
</script>

<Background>
	<div class="py-28 lg:py-32 lg:pt-44">
		<AboutHero />

		<About />
		<div class="pt-28 lg:pt-32">
			<DashedLine className="container max-w-5xl scale-x-115" />
			<Investors />
		</div>
	</div>
</Background>
