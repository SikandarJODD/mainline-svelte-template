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

<Background className="via-muted to-muted/80">
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
