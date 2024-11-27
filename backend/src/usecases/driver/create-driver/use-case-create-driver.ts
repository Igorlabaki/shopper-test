import { DriverRepositoryInterface } from "@/repositories/interfaces/driver-repository-interface"
import { CreateDriverRequestParams } from "../../../zod/driver/create-driver-params-schema"

class CreateDriverUseCase {
    constructor(
        private driverRepository: DriverRepositoryInterface,
    ) { }

    async execute(params: CreateDriverRequestParams) {

        // Validate if user exists
        const driverAlreadyExists = await this.driverRepository.create(params)

        //

        return { driverAlreadyExists }
    }
}

export { CreateDriverUseCase }