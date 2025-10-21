<script lang="ts">
  import Check from "@lucide/svelte/icons/check";
  import { Button } from "$lib/components/ui/button";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import * as Select from "$lib/components/ui/select";
  import { Textarea } from "$lib/components/ui/textarea";
  import * as Field from "$lib/components/ui/field";

  let formData = $state({
    name: "",
    email: "",
    company: "",
    employees: "",
    message: "",
    agree: false,
  });

  let isSubmitting = $state(false);
  let hasSucceeded = $state(false);
  let errors = $state<Record<string, string>>({});

  function validateForm() {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!formData.employees) {
      newErrors.employees = "Please select number of employees";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!formData.agree) {
      newErrors.agree = "You must agree to the terms";
    }

    errors = newErrors;
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: Event) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    isSubmitting = true;

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form and show success
    hasSucceeded = true;
    isSubmitting = false;

    // Reset form after showing success
    setTimeout(() => {
      formData = {
        name: "",
        email: "",
        company: "",
        employees: "",
        message: "",
        agree: false,
      };
      hasSucceeded = false;
    }, 3000);
  }
</script>

{#if hasSucceeded}
  <div class="w-full gap-2 rounded-md border p-2 sm:p-5 md:p-8">
    <div class="flex flex-col items-center gap-4 py-12 text-center">
      <div
        class="bg-primary text-primary-foreground flex size-12 items-center justify-center rounded-full"
      >
        <Check class="size-6" />
      </div>
      <div>
        <h3 class="text-xl font-semibold">Thank you for your message!</h3>
        <p class="text-muted-foreground mt-2">
          We'll get back to you as soon as possible.
        </p>
      </div>
    </div>
  </div>
{:else}
  <form
    onsubmit={handleSubmit}
    class="w-full gap-2 rounded-md border p-2 sm:p-5 md:p-8"
  >
    <div class="grid gap-6 md:grid-cols-2">
      <!-- Name Field -->
      <Field.FieldSet>
        <Field.FieldLabel for="name">Name</Field.FieldLabel>
        <Field.FieldContent>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            bind:value={formData.name}
            required
          />
          {#if errors.name}
            <Field.FieldError>{errors.name}</Field.FieldError>
          {/if}
        </Field.FieldContent>
      </Field.FieldSet>

      <!-- Email Field -->
      <Field.FieldSet>
        <Field.FieldLabel for="email">Email</Field.FieldLabel>
        <Field.FieldContent>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            bind:value={formData.email}
            required
          />
          {#if errors.email}
            <Field.FieldError>{errors.email}</Field.FieldError>
          {/if}
        </Field.FieldContent>
      </Field.FieldSet>

      <!-- Company Field -->
      <Field.FieldSet>
        <Field.FieldLabel for="company">Company</Field.FieldLabel>
        <Field.FieldContent>
          <Input
            id="company"
            type="text"
            placeholder="Acme Inc."
            bind:value={formData.company}
            required
          />
          {#if errors.company}
            <Field.FieldError>{errors.company}</Field.FieldError>
          {/if}
        </Field.FieldContent>
      </Field.FieldSet>

      <!-- Employees Field -->
      <Field.FieldSet>
        <Field.FieldLabel for="employees">Number of employees</Field.FieldLabel>
        <Field.FieldContent>
          <Select.Root type="single" bind:value={formData.employees}>
            <Select.Trigger>
              {#if formData.employees}
                {formData.employees}
              {:else}
                Select number of employees
              {/if}
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="1-10">1-10</Select.Item>
              <Select.Item value="11-50">11-50</Select.Item>
              <Select.Item value="51-200">51-200</Select.Item>
              <Select.Item value="201-500">201-500</Select.Item>
              <Select.Item value="500+">500+</Select.Item>
            </Select.Content>
          </Select.Root>
          {#if errors.employees}
            <Field.FieldError>{errors.employees}</Field.FieldError>
          {/if}
        </Field.FieldContent>
      </Field.FieldSet>
    </div>

    <!-- Message Field -->
    <Field.FieldSet class="mt-6">
      <Field.FieldLabel for="message">Message</Field.FieldLabel>
      <Field.FieldContent>
        <Textarea
          id="message"
          placeholder="Tell us about your project..."
          rows={5}
          bind:value={formData.message}
          required
        />
        {#if errors.message}
          <Field.FieldError>{errors.message}</Field.FieldError>
        {/if}
      </Field.FieldContent>
    </Field.FieldSet>

    <!-- Terms Checkbox -->
    <div class="mt-6 flex items-start gap-2">
      <Checkbox id="agree" bind:checked={formData.agree} />
      <Label
        for="agree"
        class="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        I agree to the terms and conditions and privacy policy
      </Label>
    </div>
    {#if errors.agree}
      <p class="text-destructive mt-1 text-sm">{errors.agree}</p>
    {/if}

    <!-- Submit Button -->
    <Button type="submit" class="mt-6 w-full" disabled={isSubmitting}>
      {isSubmitting ? "Sending..." : "Send message"}
    </Button>
  </form>
{/if}
