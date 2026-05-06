"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { leadSchema } from "@/lib/schemas";

type YearGroup = "Year 11" | "Year 12";
type LeadSource = "hero_form" | "contact_form" | "resource_gate" | "footer_form" | "sydney_landing" | "parramatta_landing" | "other";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  year_group: YearGroup | "";
  source: LeadSource;
  turnstile_token: string;
  message?: string;
  website?: string;
}

type FormState = "idle" | "submitting" | "success" | "error";

interface LeadFormProps {
  source?: LeadSource;
  className?: string;
  compact?: boolean;
}

export function LeadForm({ source = "hero_form", className, compact = false }: LeadFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useForm<FormValues>({
    resolver: zodResolver(leadSchema) as any,
    defaultValues: { source, year_group: "", turnstile_token: "dev-token" },
  });

  async function onSubmit(data: FormValues) {
    setState("submitting");
    setServerError(null);

    // Inject a dummy turnstile token in dev if not configured
    const payload = {
      ...data,
      turnstile_token: data.turnstile_token ?? "dev-token",
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const json = (await res.json()) as { error?: string };
        throw new Error(json.error ?? "Something went wrong");
      }

      setState("success");
      reset();
    } catch (err) {
      setState("error");
      setServerError(
        err instanceof Error
          ? err.message
          : "We couldn't reach our server. Try again or call us on 0470 665 141."
      );
    }
  }

  if (state === "success") {
    return (
      <div
        className={cn(
          "rounded-xl bg-surface-raised p-6 text-center shadow-md",
          className
        )}
        role="status"
        aria-live="polite"
      >
        <div className="mb-3 text-3xl">✓</div>
        <p className="font-600 text-ink-900">You&apos;re booked in!</p>
        <p className="mt-1 text-sm text-ink-500">
          We&apos;ll reply within 4 hours. Check your inbox.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "rounded-xl bg-surface-raised p-5 shadow-md sm:p-6",
        className
      )}
      noValidate
      aria-label="Book a free strategy call"
    >
      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute -left-[9999px] opacity-0"
        {...register("website")}
      />

      {/* Hidden fields */}
      <input type="hidden" {...register("source")} />
      <input type="hidden" {...register("turnstile_token")} />

      {!compact && (
        <p className="mb-4 text-sm font-600 text-ink-900">
          Get a free 30-min strategy call
        </p>
      )}

      {serverError && (
        <div
          role="alert"
          className="mb-4 rounded-md bg-red-50 border border-error px-3 py-2.5 text-sm text-error"
        >
          {serverError}
        </div>
      )}

      <div className={cn("grid gap-3", compact ? "grid-cols-1" : "grid-cols-2")}>
        {/* Name */}
        <div className={cn(compact ? "" : "col-span-1")}>
          <label htmlFor="lead-name" className="block text-xs font-500 text-ink-700 mb-1.5">
            Full name
          </label>
          <input
            id="lead-name"
            type="text"
            autoComplete="name"
            placeholder="Alex Chen"
            aria-describedby={errors.name ? "lead-name-error" : undefined}
            aria-invalid={!!errors.name}
            className={cn(fieldCls, errors.name && errorFieldCls)}
            {...register("name")}
          />
          {errors.name && (
            <p id="lead-name-error" className={errorMsgCls}>
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Year group */}
        <div>
          <label htmlFor="lead-year" className="block text-xs font-500 text-ink-700 mb-1.5">
            Year group
          </label>
          <select
            id="lead-year"
            aria-describedby={errors.year_group ? "lead-year-error" : undefined}
            aria-invalid={!!errors.year_group}
            className={cn(fieldCls, errors.year_group && errorFieldCls)}
            {...register("year_group")}
          >
            <option value="">Select year</option>
            <option value="Year 11">Year 11</option>
            <option value="Year 12">Year 12</option>
          </select>
          {errors.year_group && (
            <p id="lead-year-error" className={errorMsgCls}>
              {errors.year_group.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="col-span-full">
          <label htmlFor="lead-email" className="block text-xs font-500 text-ink-700 mb-1.5">
            Email address
          </label>
          <input
            id="lead-email"
            type="email"
            autoComplete="email"
            placeholder="alex@email.com"
            aria-describedby={errors.email ? "lead-email-error" : undefined}
            aria-invalid={!!errors.email}
            className={cn(fieldCls, errors.email && errorFieldCls)}
            {...register("email")}
          />
          {errors.email && (
            <p id="lead-email-error" className={errorMsgCls}>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="col-span-full">
          <label htmlFor="lead-phone" className="block text-xs font-500 text-ink-700 mb-1.5">
            Mobile <span className="text-ink-300">(optional — faster reply)</span>
          </label>
          <input
            id="lead-phone"
            type="tel"
            autoComplete="tel"
            placeholder="04xx xxx xxx"
            aria-describedby={errors.phone ? "lead-phone-error" : undefined}
            aria-invalid={!!errors.phone}
            className={cn(fieldCls, errors.phone && errorFieldCls)}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="lead-phone-error" className={errorMsgCls}>
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className={cn(
          "mt-4 flex w-full items-center justify-center gap-2 rounded-md",
          "bg-accent-500 px-6 py-3.5 text-sm font-500 text-white",
          "shadow-sm transition-all hover:bg-accent-600 hover:-translate-y-px",
          "active:translate-y-0 focus-visible:outline-none focus-visible:shadow-glow",
          "disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
        )}
      >
        {state === "submitting" && <Loader2 size={16} className="animate-spin" />}
        Book my free call →
      </button>

      <p className="mt-3 text-center text-xs text-ink-300">
        No spam. We reply within 4 hrs. First lesson free — no card required.
      </p>
    </form>
  );
}

const fieldCls =
  "h-12 w-full rounded-md border border-border bg-surface px-3.5 text-sm text-ink-900 placeholder:text-ink-300 transition-colors focus:outline-none focus:border-2 focus:border-brand-800 focus:shadow-glow";
const errorFieldCls = "border-error focus:border-error focus:shadow-none";
const errorMsgCls = "mt-1 text-xs text-error";
