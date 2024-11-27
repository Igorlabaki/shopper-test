import { z } from "zod";

export const confirmRideSchema = z.object({
    value: z.number(),
    origin: z.string(),
    driver: z.object({
        id: z.string(),
        name: z.string(),
    }),
    distance: z.number(),
    duration: z.string(),
    destination: z.string(),
    custumer_id: z.string(),
});

export type ConfirmRideRequestParams = z.infer<typeof confirmRideSchema>;
