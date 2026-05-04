import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(6, "Enter a valid phone number")
    .max(20)
    .regex(/^[\d\s+\-()]+$/, "Enter a valid phone number"),
  year_group: z.enum(["Year 11", "Year 12"], {
    message: "Select your year group",
  }),
  source: z
    .enum(["hero_form", "contact_form", "resource_gate", "footer_form", "other"])
    .default("hero_form"),
  message: z.string().max(2000).optional(),
  turnstile_token: z.string().optional(),
  website: z.string().max(0).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const contactSchema = leadSchema.extend({
  source: z
    .enum(["hero_form", "contact_form", "resource_gate", "footer_form", "other"])
    .default("contact_form"),
  message: z.string().min(10, "Tell us a bit about what you need").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;
