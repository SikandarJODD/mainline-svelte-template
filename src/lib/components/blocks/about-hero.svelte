<script lang="ts">
	import DashedLine from '../other/dashed-line.svelte';

	const stats = [
		{
			value: '$150M',
			label: 'Raised'
		},
		{
			value: '20K',
			label: 'Companies'
		},
		{
			value: '1.3B',
			label: 'Monthly transactions'
		},
		{
			value: '1.5K',
			label: 'Connections per minute'
		}
	];
</script>

<section class="container max-w-5xl">
	<div class="flex flex-col gap-8 lg:flex-row lg:gap-16">
		<div class="flex-1">
			<h1 class="text-2xl tracking-tight md:text-4xl lg:text-5xl">
				Hi, we're Mainline, and we help product teams plan.
			</h1>
			<p class="text-muted-foreground mt-4 leading-snug text-balance lg:mt-6">
				At Mainline, we are dedicated to transforming the way teams plan, execute, and
				deliver projects. Our mission is to provide our customers with an unbeatable edge over
				delays, inefficiencies, and disorganisation through actionable insights and seamless
				collaboration. We'll stop at nothing to give you the tools you need to get every
				project across the finish line.
				<br />
				<br />
				We're customer-obsessed — investing the time to understand every aspect of your workflow
				so that we can help you operate better than ever before. We're all in this together because
				your success is our success. In our history as a company, we've never lost a customer, because
				when your projects succeed, so do we.
			</p>
		</div>

		<div
			class="relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10"
		>
			<DashedLine
				orientation="vertical"
				class="absolute top-0 left-0 max-lg:hidden"
			/>
			<DashedLine
				orientation="horizontal"
				class="absolute top-0 lg:hidden"
			/>
			{#each stats as stat}
				<div class="text-center lg:text-left">
					<p class="text-3xl font-bold lg:text-5xl">{stat.value}</p>
					<p class="text-muted-foreground text-sm">{stat.label}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
