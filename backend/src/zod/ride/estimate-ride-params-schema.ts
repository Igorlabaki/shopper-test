import { z } from "zod";

export const estimateRideSchema = z.object({
    origin: z.string(),
    destination: z.string(),
    customer_id: z.string()
});

export type EstimateRideRequestParams = z.infer<typeof estimateRideSchema>;
