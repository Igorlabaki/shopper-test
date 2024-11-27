import { z } from "zod";

export const createCustumerSchema = z.object({
    name: z.string(),
});

export type CreateCustumerRequestParams = z.infer<typeof createCustumerSchema>;
