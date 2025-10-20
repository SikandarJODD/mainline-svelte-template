<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import DashedLine from '../other/dashed-line.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import {
		Carousel,
		CarouselContent,
		CarouselItem,
		CarouselNext,
		CarouselPrevious
	} from '$lib/components/ui/carousel';
	import { cn } from '$lib/utils';

	interface TestimonialProps {
		className?: string;
		dashedLineClassName?: string;
	}

	let { className = '', dashedLineClassName = '' }: TestimonialProps = $props();

	const items = [
  {
    quote: "We're misusing Mainline as a CRM and it still works!",
    author: "Amy Chase",
    role: "PM",
    company: "Mercury Finance",
    image: "/testimonials/amy-chase.webp",
  },
  {
    quote: "I was able to replace 80% of my team with Mainline bots.",
    author: "Jonas Kotara",
    role: "Lead Engineer",
    company: "Mercury Finance",
    image: "/testimonials/jonas-kotara.webp",
  },
  {
    quote: "Founder Mode is hard enough without having a really nice PM app.",
    author: "Kevin Yam",
    role: "Founder",
    company: "Mercury Finance",
    image: "/testimonials/kevin-yam.webp",
  },
  {
    quote: "I can use the tool as a substitute from my PM.",
    author: "Kundo Marta",
    role: "Founder",
    company: "Mercury Finance",
    image: "/testimonials/kundo-marta.webp",
  },
  {
    quote: "We're misusing Mainline as a CRM and it still works!",
    author: "Amy Chase",
    role: "PM",
    company: "Mercury Finance",
    image: "/testimonials/amy-chase.webp",
  },
  {
    quote: "I was able to replace 80% of my team with Mainline bots.",
    author: "Jonas Kotara",
    role: "Lead Engineer",
    company: "Mercury Finance",
    image: "/testimonials/jonas-kotara.webp",
  },
  {
    quote: "Founder Mode is hard enough without having a really nice PM app.",
    author: "Kevin Yam",
    role: "Founder",
    company: "Mercury Finance",
    image: "/testimonials/kevin-yam.webp",
  },
  {
    quote: "I can use the tool as a substitute from my PM.",
    author: "Kundo Marta",
    role: "Founder",
    company: "Mercury Finance",
    image: "/testimonials/kundo-marta.webp",
  },
];
</script>

<section class={cn('overflow-hidden py-28 lg:py-32', className)}>
	<div class="container">
		<div class="space-y-4">
			<h2 class="text-2xl tracking-tight md:text-4xl lg:text-5xl">
				Trusted by product builders
			</h2>
			<p class="text-muted-foreground max-w-md leading-snug">
				Mainline is built on the habits that make the best product teams successful: staying
				focused, moving quickly, and always aiming for high-quality work.
			</p>
			<Button variant="outline" class="shadow-md">
				Read our Customer Stories <ArrowRight class="size-4" />
			</Button>
		</div>

		<div
			class="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-20"
		>
			<Carousel
				opts={{
					align: 'start',
					loop: true
				}}
				class="w-full"
			>
				<CarouselContent class="">
					{#each items as testimonial }
						<CarouselItem
							class="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
						>
							<div class="p-1">
								<Card>
									<CardContent class="flex flex-col gap-6 p-6">
										<div class="flex items-center gap-4">
											<img
												src={testimonial.image}
												alt={testimonial.author}
												width={48}
												height={48}
												class="size-12 rounded-full object-cover"
											/>
											<div>
												<p class="font-semibold">{testimonial.author}</p>
												<p class="text-muted-foreground text-sm">
													{testimonial.role}
												</p>
											</div>
										</div>
										<p class="text-muted-foreground leading-snug">
											{testimonial.quote}
										</p>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					{/each}
				</CarouselContent>
				<div class="mt-8 flex justify-center gap-2">
					<CarouselPrevious />
					<CarouselNext />
				</div>
			</Carousel>
		</div>
	</div>
</section>

<DashedLine class={cn('container', dashedLineClassName)} />
