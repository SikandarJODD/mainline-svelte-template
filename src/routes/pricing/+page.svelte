<script lang="ts">
	import Background from '$lib/components/other/background.svelte';
	import Pricing from '$lib/components/blocks/pricing.svelte';
	import PricingTable from '$lib/components/blocks/pricing-table.svelte';
</script>

<svelte:head>
	<title>Pricing - Mainline SvelteKit Template | Free & Open Source</title>
	<meta name="description" content="Mainline is completely free and open-source. Download our SvelteKit template for startups with no costs. Built with shadcn-svelte, Tailwind CSS, and modern web technologies." />
	<meta name="keywords" content="free sveltekit template, pricing, open source template, startup template, mainline, shadcn-svelte, free download, MIT license" />
	<meta name="author" content="Sikandar Bhide" />
</svelte:head>

<Background>
	<Pricing className="py-28 text-center lg:pt-44 lg:pb-32" />
	<PricingTable />
</Background>
