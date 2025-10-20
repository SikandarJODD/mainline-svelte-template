<script lang="ts">
  import { page } from "$app/stores";
  import { ChevronRight, Github } from "@lucide/svelte";
  import ThemeToggle from "../other/theme-toggle.svelte";
  import { Button } from "$lib/components/ui/button";
  import * as NavigationMenu from "$lib/components/ui/navigation-menu";
  import { cn } from "$lib/utils";

  const ITEMS = [
    {
      label: "Features",
      href: "#features",
      dropdownItems: [
        {
          title: "Modern product teams",
          href: "/#feature-modern-teams",
          description:
            "Mainline is built on the habits that make the best product teams successful",
        },
        {
          title: "Resource Allocation",
          href: "/#resource-allocation",
          description: "Mainline your resource allocation and execution",
        },
      ],
    },
    { label: "About Us", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  let isMenuOpen = $state(false);
  let openDropdown = $state<string | null>(null);

  $effect(() => {
    // Get the current pathname for reactivity
    $page.url.pathname;
  });
</script>

<section
  class={cn(
    "bg-background/70 absolute left-1/2 z-50 w-[min(90%,700px)] -translate-x-1/2 rounded-4xl border backdrop-blur-md transition-all duration-300",
    "top-5 lg:top-12"
  )}
>
  <div class="flex items-center justify-between px-6 py-3">
    <a href="/" class="flex shrink-0 items-center gap-2">
      <img
        src="/logo.svg"
        alt="logo"
        width="94"
        height="18"
        class="dark:invert"
      />
    </a>

    <!-- Desktop Navigation -->
    <NavigationMenu.Root class="max-lg:hidden">
      <NavigationMenu.List>
        {#each ITEMS as link}
          {#if link.dropdownItems}
            <NavigationMenu.Item>
              <NavigationMenu.Trigger
                class="data-[state=open]:bg-accent/50 bg-transparent! px-1.5"
              >
                {link.label}
              </NavigationMenu.Trigger>
              <NavigationMenu.Content>
                <ul class="w-[400px] space-y-2 p-4">
                  {#each link.dropdownItems as item}
                    <li>
                      <NavigationMenu.Link>
                        <a
                          href={item.href}
                          class="group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex items-center gap-4 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none"
                        >
                          <div
                            class="space-y-1.5 transition-transform duration-300 group-hover:translate-x-1"
                          >
                            <div class="font-medium text-sm leading-none">
                              {item.title}
                            </div>
                            <p
                              class="text-muted-foreground line-clamp-2 text-sm leading-snug"
                            >
                              {item.description}
                            </p>
                          </div>
                        </a>
                      </NavigationMenu.Link>
                    </li>
                  {/each}
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          {:else}
            <NavigationMenu.Item>
              <a
                href={link.href}
                class={cn(
                  "relative bg-transparent px-1.5 text-sm font-medium transition-opacity hover:opacity-75",
                  $page.url.pathname === link.href && "text-muted-foreground"
                )}
              >
                {link.label}
              </a>
            </NavigationMenu.Item>
          {/if}
        {/each}
      </NavigationMenu.List>
    </NavigationMenu.Root>

    <!-- Auth Buttons -->
    <div class="flex items-center gap-2.5">
      <ThemeToggle />
      <Button variant="outline" href="/login" class="max-lg:hidden">
        <span class="relative z-10">Login</span>
      </Button>
      <a
        href="https://github.com/shadcnblocks/mainline-nextjs-template"
        class="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Github class="size-4" />
        <span class="sr-only">GitHub</span>
      </a>

      <!-- Hamburger Menu Button (Mobile Only) -->
      <button
        class="text-muted-foreground relative flex size-8 lg:hidden"
        onclick={() => (isMenuOpen = !isMenuOpen)}
      >
        <span class="sr-only">Open main menu</span>
        <div
          class="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2"
        >
          <span
            aria-hidden="true"
            class={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
          ></span>
          <span
            aria-hidden="true"
            class={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            aria-hidden="true"
            class={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
          ></span>
        </div>
      </button>
    </div>
  </div>

  <!-- Mobile Menu Navigation -->
  <div
    class={cn(
      "bg-background fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border p-6 transition-all duration-300 ease-in-out lg:hidden",
      isMenuOpen
        ? "visible translate-y-0 opacity-100"
        : "invisible -translate-y-4 opacity-0"
    )}
  >
    <nav class="divide-border flex flex-1 flex-col divide-y">
      {#each ITEMS as link}
        {#if link.dropdownItems}
          <div class="py-4 first:pt-0 last:pb-0">
            <button
              onclick={() =>
                (openDropdown =
                  openDropdown === link.label ? null : link.label)}
              class="text-primary flex w-full items-center justify-between text-base font-medium"
            >
              {link.label}
              <ChevronRight
                class={cn(
                  "size-4 transition-transform duration-200",
                  openDropdown === link.label ? "rotate-90" : ""
                )}
              />
            </button>
            <div
              class={cn(
                "overflow-hidden transition-all duration-300",
                openDropdown === link.label
                  ? "mt-4 max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              <div class="bg-muted/50 space-y-3 rounded-lg p-4">
                {#each link.dropdownItems as item}
                  <a
                    href={item.href}
                    class="group hover:bg-accent block rounded-md p-2 transition-colors"
                    onclick={() => {
                      isMenuOpen = false;
                      openDropdown = null;
                    }}
                  >
                    <div
                      class="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      <div class="text-primary font-medium">
                        {item.title}
                      </div>

                      <p class="text-muted-foreground mt-1 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </a>
                {/each}
              </div>
            </div>
          </div>
        {:else}
          <a
            href={link.href}
            class={cn(
              "text-primary hover:text-primary/80 py-4 text-base font-medium transition-colors first:pt-0 last:pb-0",
              $page.url.pathname === link.href && "text-muted-foreground"
            )}
            onclick={() => (isMenuOpen = false)}
          >
            {link.label}
          </a>
        {/if}
      {/each}
    </nav>
  </div>
</section>
