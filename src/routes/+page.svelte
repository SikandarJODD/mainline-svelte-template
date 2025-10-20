<script lang="ts">
	import Background from '$lib/components/other/background.svelte';
	import FAQ from '$lib/components/blocks/faq.svelte';
	import Features from '$lib/components/blocks/features.svelte';
	import Hero from '$lib/components/blocks/hero.svelte';
	import Logos from '$lib/components/blocks/logos.svelte';
	import Pricing from '$lib/components/blocks/pricing.svelte';
	import ResourceAllocation from '$lib/components/blocks/resource-allocation.svelte';
	import Testimonials from '$lib/components/blocks/testimonials.svelte';
</script>

<svelte:head>
	<title>Mainline - Free SvelteKit Template for Startups</title>
	<meta name="description" content="Free open-source SvelteKit template for startups. Built with shadcn-svelte, Tailwind CSS 4, and TypeScript. Perfect for modern web applications and landing pages." />
	<meta name="keywords" content="sveltekit, svelte template, free template, startup template, mainline, shadcn-svelte, tailwind css, cnblocks, landing page template, open source, MIT license" />
	<meta name="author" content="Sikandar Bhide" />
</svelte:head>

<Background class="via-muted to-muted/80">
	<Hero />
	<Logos />
	<Features />
	<ResourceAllocation />
</Background>
<Testimonials />
<Background variant="bottom">
	<Pricing />
	<FAQ />
</Background>
