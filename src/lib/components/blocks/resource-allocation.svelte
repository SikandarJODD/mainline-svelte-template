<script lang="ts">
	import DashedLine from '../other/dashed-line.svelte';
	import { cn } from '$lib/utils';

	type ImageItem = {
		src: string;
		alt: string;
		width: number;
		height: number;
	};

	type AllocationItem = {
		title: string;
		description: string;
		images: ImageItem[];
		className: string;
		fade: string[];
	};

	const topItems: AllocationItem[] = [
		{
			title: 'Reusable issue templates.',
			description:
				'Draft lightning-fast documents with our Smart Instructions and Templates.',
			images: [
				{
					src: '/resource-allocation/templates.webp',
					alt: 'Issue template interface',
					width: 495,
					height: 186
				}
			],
			className:
				'flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2',
			fade: []
		},
		{
			title: 'Simplify your stack.',
			description: 'No more Confluence, SharePoint, or Microsoft Word.',
			images: [
				{ src: '/logos/jira.svg', alt: 'Jira logo', width: 48, height: 48 },
				{ src: '/logos/excel.svg', alt: 'Excel logo', width: 48, height: 48 },
				{
					src: '/logos/notion.svg',
					alt: 'Notion logo',
					width: 48,
					height: 48
				},
				{ src: '/logos/word.svg', alt: 'Word logo', width: 48, height: 48 },
				{
					src: '/logos/monday.svg',
					alt: 'Monday logo',
					width: 48,
					height: 48
				},
				{
					src: '/logos/drive.svg',
					alt: 'Google Drive logo',
					width: 48,
					height: 48
				},
				{
					src: '/logos/jira.svg',
					alt: 'Jira logo',
					width: 48,
					height: 48
				},
				{ src: '/logos/asana.svg', alt: 'Asana logo', width: 48, height: 48 }
			],
			className:
				'flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 md:[&>.title-container]:translate-x-2 xl:[&>.title-container]:translate-x-4 [&>.title-container]:translate-x-0',
			fade: []
		}
	];

	const bottomItems: AllocationItem[] = [
		{
			title: 'Graveyard it.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.',
			images: [
				{
					src: '/resource-allocation/graveyard.webp',
					alt: 'Graveyard interface',
					width: 305,
					height: 280
				}
			],
			className:
				'[&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2',
			fade: ['bottom']
		},
		{
			title: 'Task discussions.',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
			images: [
				{
					src: '/resource-allocation/discussions.webp',
					alt: 'Task discussions interface',
					width: 320,
					height: 103
				}
			],
			className:
				'justify-normal [&>.title-container]:mb-5 md:[&>.title-container]:mb-0 [&>.image-container]:flex-1 md:[&>.image-container]:place-items-center md:[&>.image-container]:-translate-y-3',
			fade: []
		},
		{
			title: 'Notifications.',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
			images: [
				{
					src: '/resource-allocation/notifications.webp',
					alt: 'Notifications interface',
					width: 305,
					height: 280
				}
			],
			className:
				'[&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2',
			fade: ['bottom']
		}
	];

	interface ItemProps {
		item: AllocationItem;
		isLast?: boolean;
		className?: string;
	}
</script>

<section id="resource-allocation" class="overflow-hidden pb-28 lg:pb-32">
	<div class="">
		<h2
			class="container text-balance text-center text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
		>
			Mainline your resource allocation and execution
		</h2>

		<div class="mt-8 md:mt-12 lg:mt-20">
			<DashedLine orientation="horizontal" class="container scale-x-105" />

			<!-- Top Features Grid - 2 items -->
			<div class="relative container flex max-md:flex-col">
				{#each topItems as item, i (item.title)}
					<div
						class={cn(
							'relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8',
							item.className
						)}
					>
						<div class="title-container text-balance">
							<h3 class="inline font-semibold">{item.title}</h3>
							<span class="text-muted-foreground"> {item.description}</span>
						</div>

						{#if item.fade.includes('bottom')}
							<div
								class="from-muted/80 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent md:hidden"
							></div>
						{/if}

						{#if item.images.length > 4}
							<div class="relative overflow-hidden">
								<div class="flex flex-col gap-5">
									<!-- First row - right aligned -->
									<div class="flex translate-x-4 justify-end gap-5">
										{#each item.images.slice(0, 4) as image, j}
											<div
												class="bg-background grid aspect-square size-16 place-items-center rounded-2xl p-2 lg:size-20"
											>
												<img
													src={image.src}
													alt={image.alt}
													width={image.width}
													height={image.height}
													class="object-contain object-left-top"
												/>
												<div
													class="from-muted/80 absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l to-transparent"
												></div>
											</div>
										{/each}
									</div>

									<!-- Second row - left aligned -->
									<div class="flex -translate-x-4 gap-5">
										{#each item.images.slice(4) as image, j}
											<div
												class="bg-background grid aspect-square size-16 place-items-center rounded-2xl lg:size-20"
											>
												<img
													src={image.src}
													alt={image.alt}
													width={image.width}
													height={image.height}
													class="object-contain object-left-top"
												/>
												<div
													class="from-muted absolute inset-y-0 bottom-0 left-0 z-10 w-14 bg-linear-to-r to-transparent"
												></div>
											</div>
										{/each}
									</div>
								</div>
							</div>
						{:else}
							<div class="image-container grid grid-cols-1 gap-4">
								{#each item.images as image, j}
									<img
										src={image.src}
										alt={image.alt}
										width={image.width}
										height={image.height}
										class="object-contain object-left-top"
									/>
								{/each}
							</div>
						{/if}

						{#if i < topItems.length - 1}
							<DashedLine
								orientation="vertical"
								class="absolute top-0 right-0 max-md:hidden"
							/>
							<DashedLine
								orientation="horizontal"
								class="absolute inset-x-0 bottom-0 md:hidden"
							/>
						{/if}
					</div>
				{/each}
			</div>

			<DashedLine orientation="horizontal" class="container max-w-7xl scale-x-110" />

			<!-- Bottom Features Grid - 3 items -->
			<div class="relative container grid max-w-7xl md:grid-cols-3">
				{#each bottomItems as item, i (item.title)}
					<div
						class={cn(
							'relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8 md:pb-0',
							item.className
						)}
					>
						<div class="title-container text-balance">
							<h3 class="inline font-semibold">{item.title}</h3>
							<span class="text-muted-foreground"> {item.description}</span>
						</div>

						{#if item.fade.includes('bottom')}
							<div
								class="from-muted/80 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent md:hidden"
							></div>
						{/if}

						<div class="image-container grid grid-cols-1 gap-4">
							{#each item.images as image, j}
								<img
									src={image.src}
									alt={image.alt}
									width={image.width}
									height={image.height}
									class="object-contain object-left-top"
								/>
							{/each}
						</div>

						{#if i < bottomItems.length - 1}
							<DashedLine
								orientation="vertical"
								class="absolute top-0 right-0 max-md:hidden"
							/>
							<DashedLine
								orientation="horizontal"
								class="absolute inset-x-0 bottom-0 md:hidden"
							/>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		<DashedLine orientation="horizontal" class="container max-w-7xl scale-x-110" />
	</div>
</section>
