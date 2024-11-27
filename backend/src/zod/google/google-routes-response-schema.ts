import { z } from "zod";

const polylineSchema = z.object({
    encodedPolyline: z.string(),
});

const routeSchema = z.object({
    duration: z.string(),
    polyline: polylineSchema,
    distanceMeters: z.number(),
});

const googleRoutesResponseSchema = z.object({
    routes: z.array(routeSchema),
});

export type GoogleRoutesResponseSchema = z.infer<typeof googleRoutesResponseSchema>;
