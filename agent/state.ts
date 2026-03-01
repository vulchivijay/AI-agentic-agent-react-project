import { z } from "zod";

export const AgentStateSchema = z.object({
  designImagePath: z.string(),
  designAnalysis: z.string().optional(),
  generatedCode: z.string().optional(),
  unitTests: z.string().optional(),
  systemTests: z.string().optional(),
  reviewReport: z.string().optional(),
  designDiffScore: z.number().optional(),
  prUrl: z.string().optional(),
  errors: z.array(z.string()).default([]),
});

export type AgentState = z.infer<typeof AgentStateSchema>;