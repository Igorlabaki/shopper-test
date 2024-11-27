import axios from 'axios';

import { env } from '@/env';

export const axiosGoogleInstance = axios.create({
    baseURL: 'https://routes.googleapis.com/directions/v2:computeRoutes',
    headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': env.GOOGLE_API_KEY,
        'X-Goog-FieldMask': 'routes.distanceMeters,routes.duration,routes.polyline.encodedPolyline'
    },
});