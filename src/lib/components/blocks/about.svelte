<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';

	interface ImageSectionProps {
		images: { src: string; alt: string }[];
		className?: string;
	}

	interface TextSectionProps {
		title?: string;
		paragraphs: string[];
		ctaButton?: {
			href: string;
			text: string;
		};
	}
</script>

<section class="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
	<!-- Images Left - Text Right -->
	<div class="flex flex-col gap-8 lg:gap-16 xl:gap-20">
		<!-- ImageSection 1 -->
		<div class={cn('flex flex-col gap-6', 'xl:-translate-x-10')}>
			<div class="relative aspect-[2/1.5] overflow-hidden rounded-2xl">
				<img
					src="/about/1.webp"
					alt="Team collaboration"
					class="h-full w-full object-cover"
				/>
			</div>
			<div class="relative aspect-[2/1.5] overflow-hidden rounded-2xl">
				<img
					src="/about/2.webp"
					alt="Team workspace"
					class="h-full w-full object-cover"
				/>
			</div>
		</div>

		<!-- TextSection 1 -->
		<section class="flex-1 space-y-4 text-lg md:space-y-6">
			<h2 class="text-foreground text-4xl">The team</h2>
			<div class="text-muted-foreground max-w-xl space-y-6">
				<p>
					We started building Mainline in 2019 and launched in 2022. Every endpoint has been
					designed from the ground up — with no technical debt or legacy systems. We are
					purpose-built to power project management innovation for the next hundred years.
				</p>
				<p>
					We are 100% founder and team-owned, profitable, and we keep our team lean. Over time,
					this page will become more polished, but for now, we're focused on delivering for
					developers.
				</p>
				<p>
					If you're interested in building the future of PM, check out our open roles below.
				</p>
			</div>
			<div class="mt-8">
				<a href="/careers">
					<Button size="lg">View open roles</Button>
				</a>
			</div>
		</section>
	</div>

	<!-- Text Left - Images Right -->
	<div class="flex flex-col gap-8 lg:gap-16 xl:gap-20">
		<!-- TextSection 2 -->
		<section class="flex-1 space-y-4 text-lg md:space-y-6">
			<div class="text-muted-foreground max-w-xl space-y-6">
				<p>
					At Mainline, we are dedicated to transforming the way teams plan, execute, and deliver
					projects. Our mission is to provide our customers with an unbeatable edge over delays,
					inefficiencies, and disorganisation through actionable insights and seamless
					collaboration. We'll stop at nothing to give you the tools you need to get every
					project across the finish line.
				</p>
				<p>
					We're customer-obsessed — investing the time to understand every aspect of your
					workflow so that we can help you operate better than ever before. We're all in this
					together because your success is our success. In our history as a company, we've never
					lost a customer, because when your projects succeed, so do we.
				</p>
			</div>
		</section>

		<!-- ImageSection 2 -->
		<div class={cn('flex flex-col gap-6', 'hidden lg:flex xl:translate-x-10')}>
			<div class="relative aspect-[2/1.5] overflow-hidden rounded-2xl">
				<img
					src="/about/3.webp"
					alt="Modern workspace"
					class="h-full w-full object-cover"
				/>
			</div>
			<div class="relative aspect-[2/1.5] overflow-hidden rounded-2xl">
				<img
					src="/about/4.webp"
					alt="Team collaboration"
					class="h-full w-full object-cover"
				/>
			</div>
		</div>
	</div>
</section>
