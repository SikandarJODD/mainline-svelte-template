<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils";

	interface Props {
		variant?: "top" | "bottom";
		class?: string;
		children?: Snippet;
	}

	let { variant = "top", class: className, children }: Props = $props();
</script>

<div
	class={cn(
		"relative mx-2.5 mt-2.5 lg:mx-4",
		variant === "top" &&
			"rounded-t-4xl rounded-b-2xl bg-gradient-to-b from-primary/50 via-background via-20% to-background/80",
		variant === "bottom" &&
			"rounded-t-2xl rounded-b-4xl bg-gradient-to-b from-background via-background to-primary/50",
		className,
	)}
>
	{@render children?.()}
</div>
