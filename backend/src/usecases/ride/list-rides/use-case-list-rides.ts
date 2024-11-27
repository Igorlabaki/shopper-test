import { HttpResourceNotFoundError } from "@/errors/errors-type/http-resource-not-found-error";
import { DriverRepositoryInterface } from "@/repositories/interfaces/driver-repository-interface";
import { RideRepositoryInterface } from "@/repositories/interfaces/ride-repository-interface";
import { ListRidesRequestParams } from "@/zod/ride/list-ride-params-schema";

class ListRideUseCase {
  constructor(private rideRepository: RideRepositoryInterface, private driverRepository: DriverRepositoryInterface) {}

  async execute(params:ListRidesRequestParams) {

    if(params.driver_id){
      const driverById = await this.driverRepository.getById(params.driver_id);

      if(driverById){
        throw new HttpResourceNotFoundError("DRIVER")
      }
    }

    const rideList = await this.rideRepository.list(params);

    if(rideList?.length === 0){
      throw new HttpResourceNotFoundError("RIDES")
    }

    const formatedResponse ={
      custumer_id: params.custumer_id,
      rides: rideList
    }

    return formatedResponse
  }
}

export { ListRideUseCase };
