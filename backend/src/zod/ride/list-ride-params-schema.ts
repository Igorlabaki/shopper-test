import { z } from "zod";

export const listRidesSchema = z.object({
    custumer_id: z.string(),
    driver_id: z.string().optional(),
});

export type ListRidesRequestParams = z.infer<typeof listRidesSchema>;
