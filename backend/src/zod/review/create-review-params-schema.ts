import { z } from "zod";

export const createReviewSchema = z.object({
    driver_id: z.string(),
    custumer_id: z.string(),
    rating: z.number(),
    comment: z.string(),
});

export type CreateReviewRequestParams = z.infer<typeof createReviewSchema>;
