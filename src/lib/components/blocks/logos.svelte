<script lang="ts">
	import { cn } from '$lib/utils';

	type Company = {
		name: string;
		logo: string;
		width: number;
		height: number;
		href: string;
	};

	const topRowCompanies: Company[] = [
		{
			name: 'Mercury',
			logo: '/logos/mercury.svg',
			width: 143,
			height: 26,
			href: 'https://mercury.com'
		},
		{
			name: 'Watershed',
			logo: '/logos/watershed.svg',
			width: 154,
			height: 31,
			href: 'https://watershed.com'
		},
		{
			name: 'Retool',
			logo: '/logos/retool.svg',
			width: 113,
			height: 22,
			href: 'https://retool.com'
		},
		{
			name: 'Descript',
			logo: '/logos/descript.svg',
			width: 112,
			height: 27,
			href: 'https://descript.com'
		}
	];

	const bottomRowCompanies: Company[] = [
		{
			name: 'Perplexity',
			logo: '/logos/perplexity.svg',
			width: 141,
			height: 32,
			href: 'https://perplexity.com'
		},
		{
			name: 'Monzo',
			logo: '/logos/monzo.svg',
			width: 104,
			height: 18,
			href: 'https://monzo.com'
		},
		{
			name: 'Ramp',
			logo: '/logos/ramp.svg',
			width: 105,
			height: 28,
			href: 'https://ramp.com'
		},
		{
			name: 'Raycast',
			logo: '/logos/raycast.svg',
			width: 128,
			height: 33,
			href: 'https://raycast.com'
		},
		{
			name: 'Arc',
			logo: '/logos/arc.svg',
			width: 64,
			height: 31,
			href: 'https://arc.net'
		}
	];

	function renderCompanyRow(companies: Company[], className: string = '') {
		return { companies, className };
	}

	const topRow = renderCompanyRow(topRowCompanies, 'animate-marquee');
	const bottomRow = renderCompanyRow(bottomRowCompanies, 'animate-marquee-reverse');
</script>

<section class="container">
	<div class="space-y-6 md:space-y-8">
		<!-- Top Row -->
		<div class="relative flex overflow-hidden">
			<div class={cn('flex animate-marquee gap-16', topRow.className)}>
				{#each topRow.companies as company (company.name)}
					<a
						href={company.href}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-block shrink-0 transition-opacity hover:opacity-70"
					>
						<img
							src={company.logo}
							alt="{company.name} logo"
							width={company.width}
							height={company.height}
							class="object-contain"
						/>
					</a>
				{/each}
				<!-- Duplicate for seamless loop -->
				{#each topRow.companies as company (company.name + '-dup')}
					<a
						href={company.href}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-block shrink-0 transition-opacity hover:opacity-70"
					>
						<img
							src={company.logo}
							alt="{company.name} logo"
							width={company.width}
							height={company.height}
							class="object-contain"
						/>
					</a>
				{/each}
			</div>
		</div>

		<!-- Bottom Row -->
		<div class="relative flex overflow-hidden">
			<div class={cn('flex animate-marquee-reverse gap-16', bottomRow.className)}>
				{#each bottomRow.companies as company (company.name)}
					<a
						href={company.href}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-block shrink-0 transition-opacity hover:opacity-70"
					>
						<img
							src={company.logo}
							alt="{company.name} logo"
							width={company.width}
							height={company.height}
							class="object-contain"
						/>
					</a>
				{/each}
				<!-- Duplicate for seamless loop -->
				{#each bottomRow.companies as company (company.name + '-dup')}
					<a
						href={company.href}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-block shrink-0 transition-opacity hover:opacity-70"
					>
						<img
							src={company.logo}
							alt="{company.name} logo"
							width={company.width}
							height={company.height}
							class="object-contain"
						/>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes marquee {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	@keyframes marquee-reverse {
		0% {
			transform: translateX(-50%);
		}
		100% {
			transform: translateX(0%);
		}
	}

	.animate-marquee {
		animation: marquee 40s linear infinite;
	}

	.animate-marquee-reverse {
		animation: marquee-reverse 40s linear infinite;
	}
</style>
