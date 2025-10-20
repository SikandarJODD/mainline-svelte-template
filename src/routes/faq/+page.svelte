<script lang="ts">
	import Background from '$lib/components/other/background.svelte';
	import FAQ from '$lib/components/blocks/faq.svelte';
	import Testimonials from '$lib/components/blocks/testimonials.svelte';
	import DashedLine from '$lib/components/other/dashed-line.svelte';
</script>

<svelte:head>
	<title>FAQ - Mainline SvelteKit Template | Frequently Asked Questions</title>
	<meta name="description" content="Frequently asked questions about Mainline SvelteKit template. Learn about features, usage, customization, and more for this free startup template." />
	<meta name="keywords" content="sveltekit faq, template questions, mainline help, free template guide, shadcn-svelte, startup template faq" />
	<meta name="author" content="Sikandar Bhide" />
</svelte:head>

<Background>
	<FAQ className="py-28 text-center lg:pt-44 lg:pb-32" className2="max-w-xl lg:grid-cols-1" headerTag="h1" />
	<DashedLine class="mx-auto max-w-xl" />
	<Testimonials dashedLineClassName="hidden" />
</Background>
