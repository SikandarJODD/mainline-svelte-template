<script lang="ts">
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "$lib/components/ui/accordion";
  import { cn } from "$lib/utils";

  interface FAQProps {
    headerTag?: "h1" | "h2";
    className?: string;
    className2?: string;
  }

  let {
    headerTag = "h2",
    className = "",
    className2 = "",
  }: FAQProps = $props();

  const categories = [
    {
      title: "Support",
      questions: [
        {
          question: "How do I update my account without breaking my laptop?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.",
        },
        {
          question: "Is support free, or do I need to Google everything?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.",
        },
        {
          question: "Are you going to be subsumed by AI?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.",
        },
      ],
    },
    {
      title: "Your account",
      questions: [
        {
          question: "Is support free, or do I need to Google everything?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.",
        },
        {
          question: "Are you going to be subsumed by AI?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.",
        },
      ],
    },
    {
      title: "Other questions",
      questions: [
        {
          question: "Is support free, or do I need to Google everything?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.",
        },
        {
          question: "Are you going to be subsumed by AI?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.",
        },
      ],
    },
  ];
</script>

<section class={cn("py-28 lg:py-32", className)}>
  <div class="container max-w-5xl">
    <div class={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
      <div class="space-y-4">
        {#if headerTag === "h1"}
          <h1 class="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Got Questions?
          </h1>
        {:else}
          <h2 class="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Got Questions?
          </h2>
        {/if}
        <p class="text-muted-foreground max-w-md leading-snug lg:mx-auto">
          If you can't find what you're looking for,
          <a href="/contact" class="underline underline-offset-4"
            >get in touch</a
          >.
        </p>
      </div>

      <div class="grid gap-6 text-start">
        {#each categories as category, categoryIndex}
          <div class="">
            <h3 class="text-muted-foreground border-b py-4">
              {category.title}
            </h3>
            <Accordion type="single" class="w-full">
              {#each category.questions as item, i}
                <AccordionItem value="{categoryIndex}-{i}">
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent class="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              {/each}
            </Accordion>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
