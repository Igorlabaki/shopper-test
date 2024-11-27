
import { ConfirmRideRequestParams } from "@/zod/ride/confirm-ride-params-schema"
import { RideRepositoryInterface } from "@/repositories/interfaces/ride-repository-interface"
import { DriverRepositoryInterface } from "@/repositories/interfaces/driver-repository-interface"
import { HttpResourceNotFoundError } from "@/errors/errors-type/http-resource-not-found-error"

import { CustumerRepositoryInterface } from "@/repositories/interfaces/custumer-repository-interface"
import { HttpInvalidDistanceError } from "@/errors/errors-type/htttp-invalid-deistance-error"

class ConfirmRideUseCase {
    constructor(
        private rideRepository: RideRepositoryInterface,
        private driverRepository: DriverRepositoryInterface,
        private custumerRepository: CustumerRepositoryInterface,
    ) { }

    async execute(params: ConfirmRideRequestParams) {

        const driverByid = await this.driverRepository.getById(params.driver.id)

        if(!driverByid){
            throw new HttpResourceNotFoundError("DRIVER")
        }

        const custumerById = await this.custumerRepository.getById(params.custumer_id)

        if(!custumerById){
            throw new HttpResourceNotFoundError("CUSTUMER")
        }

        if(driverByid.minKm > params.distance){
            throw new HttpInvalidDistanceError("")
        }

        const newRide = await this.rideRepository.create(params)

        if(!newRide){
            throw Error()
        }

        return 
    }
}

export { ConfirmRideUseCase }