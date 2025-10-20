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
	<title>Mainline - Free SvelteKit Template for Startups</title>
	<meta name="description" content="A modern free SvelteKit template built with shadcn-svelte, Tailwind CSS & TypeScript. Perfect for startups and modern web applications. Open source - MIT License." />
	<meta name="keywords" content="sveltekit, svelte template, free template, startup template, mainline, shadcn-svelte, tailwind css, cnblocks, open source, MIT license" />
	<meta name="author" content="Sikandar Bhide" />
</svelte:head>

<ModeWatcher />
<Navbar />
<main>
	{@render children?.()}
</main>
<Footer />
