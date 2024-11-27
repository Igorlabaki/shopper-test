import { Driver } from "@prisma/client";
import { axiosGoogleInstance } from "@/service/axios";
import { EstimateRideRequestParams } from "@/zod/ride/estimate-ride-params-schema"
import { GoogleRoutesResponseSchema } from "@/zod/google/google-routes-response-schema";
import { DriverRepositoryInterface } from "@/repositories/interfaces/driver-repository-interface";


class EstimateRideUseCase {
    constructor(
        private driverRepository: DriverRepositoryInterface,
    ) { }

    async execute({ customer_id, destination, origin }: EstimateRideRequestParams) {

        const [originLat, originLong] = origin?.split(',')?.map(Number);
        const [destinationLat, destinationLong] = destination?.split(',')?.map(Number);

        const googleApiRoutesRequestBody = {
            origin: {
                location: {
                    latLng: {
                        latitude: originLat,
                        longitude: originLong
                    }
                }
            },
            destination: {
                location: {
                    latLng: {
                        latitude: destinationLat,
                        longitude: destinationLong
                    }
                }
            },
            travelMode: 'DRIVE',
            units: 'METRIC'
        }

        const { routes }: GoogleRoutesResponseSchema = await axiosGoogleInstance.post('', googleApiRoutesRequestBody).then((resp) => resp.data);

        const durantion = routes[0]?.duration
        const distance = routes[0]?.distanceMeters

        const drivers = await this.driverRepository.list()

        const formatedResponse = {
            origin: {
                latitude: originLat,
                longitude: originLong
            },
            destination: {
                latitude: destinationLat,
                longitude: destinationLong,
            },
            distance,
            durantion,
            options: drivers?.map((driver: Driver) => {
                const value = (distance / 1000) * driver.tax;
                return {
                    ...driver,
                    value: parseFloat(value.toFixed(2)),
                };
            }),
            routeResponse: routes
        }

    
           return  formatedResponse 
    }
}

export { EstimateRideUseCase }