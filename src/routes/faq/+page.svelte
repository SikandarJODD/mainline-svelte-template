<script lang="ts">
	import Background from '$lib/components/other/background.svelte';
	import FAQ from '$lib/components/blocks/faq.svelte';
	import Testimonials from '$lib/components/blocks/testimonials.svelte';
	import DashedLine from '$lib/components/other/dashed-line.svelte';
</script>

<Background>
	<FAQ className="py-28 text-center lg:pt-44 lg:pb-32" className2="max-w-xl lg:grid-cols-1" headerTag="h1" />
	<DashedLine className="mx-auto max-w-xl" />
	<Testimonials dashedLineClassName="hidden" />
</Background>
