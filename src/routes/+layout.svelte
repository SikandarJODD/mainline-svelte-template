<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import Navbar from '$lib/components/blocks/navbar.svelte';
	import Footer from '$lib/components/blocks/footer.svelte';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Mainline - Modern SvelteKit Template</title>
	<meta name="description" content="A modern SvelteKit template built with shadcn-svelte, Tailwind CSS & TypeScript. Open source - MIT License." />
</svelte:head>

<ModeWatcher />
<Navbar />
<main>
	{@render children?.()}
</main>
<Footer />
