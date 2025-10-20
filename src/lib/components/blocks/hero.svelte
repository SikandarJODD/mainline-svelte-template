<script lang="ts">
  import {
    ArrowRight,
    Blend,
    ChartNoAxesColumn,
    CircleDot,
    Diamond,
  } from "@lucide/svelte";
  import DashedLine from "../other/dashed-line.svelte";
  import { Button } from "$lib/components/ui/button";

  type Feature = {
    title: string;
    description: string;
    icon: any;
  };

  const features: Feature[] = [
    {
      title: "Tailored workflows",
      description: "Track progress across custom issue flows for your team.",
      icon: CircleDot,
    },
    {
      title: "Cross-team projects",
      description: "Collaborate across teams and departments.",
      icon: Blend,
    },
    {
      title: "Milestones",
      description: "Break projects down into concrete phases.",
      icon: Diamond,
    },
    {
      title: "Progress insights",
      description: "Track scope, velocity, and progress over time.",
      icon: ChartNoAxesColumn,
    },
  ];
</script>

<section class="py-28 lg:py-32 lg:pt-44">
  <div
    class="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20"
  >
    <!-- Left side - Main content -->
    <div class="flex-1">
      <h1
        class="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl xl:whitespace-nowrap"
      >
        Mainline Next.js template
      </h1>

      <p class="text-muted-foreground text-1xl mt-5 md:text-3xl">
        Mainline is an open-source website template built with shadcn/ui,
        Tailwind 4 & Next.js
      </p>

      <div class="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
        <Button href="https://github.com/sikandarjodd/mainline-svelte-template">
          Get template
        </Button>
        <Button
          variant="outline"
          class="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md max-w-56 truncate text-start md:max-w-none"
          href="https://shadcnblocks.com"
        >
          Built by shadcnblocks.com
          <ArrowRight class="stroke-3" />
        </Button>
      </div>
    </div>

    <!-- Right side - Features -->
    <div
      class="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10"
    >
      <DashedLine
        orientation="vertical"
        class="absolute top-0 left-0 max-lg:hidden"
      />
      <DashedLine orientation="horizontal" class="absolute top-0 lg:hidden" />
      {#each features as feature}
        {@const Icon = feature.icon}
        <div class="flex gap-2.5 lg:gap-5">
          <Icon class="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
          <div>
            <h2 class="font-text text-foreground font-semibold">
              {feature.title}
            </h2>
            <p class="text-muted-foreground max-w-76 text-sm">
              {feature.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div
    class="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24"
  >
    <div class="relative h-[793px] w-full">
      <img
        src="/hero.webp"
        alt="hero"
        class="rounded-2xl object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
      />
    </div>
  </div>
</section>
