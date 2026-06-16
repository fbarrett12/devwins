import { z } from "zod";
import { Category } from "@prisma/client";

export const winSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.nativeEnum(Category),
  situation: z.string().optional(),
  task: z.string().optional(),
  action: z.string().optional(),
  result: z.string().optional(),
  impactMetric: z.string().optional(),
  technologies: z.array(z.string()).optional(),
});

export type WinFormInput = z.infer<typeof winSchema>;