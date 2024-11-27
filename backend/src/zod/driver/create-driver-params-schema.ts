import { z } from "zod";

export const createDriverSchema = z.object({
    car: z.string(),
    tax: z.number(),
    name: z.string(),
    minKm: z.number(), 
    avatarUrl: z.string(),
    description: z.string(),
});

export type CreateDriverRequestParams = z.infer<typeof createDriverSchema>;
