import { CreateReviewRequestParams } from "@/zod/review/create-review-params-schema"
import { ReviewRepositoryInterface } from "@/repositories/interfaces/review-repository-interface"
import { CustumerRepositoryInterface } from "@/repositories/interfaces/custumer-repository-interface"
import { DriverRepositoryInterface } from "@/repositories/interfaces/driver-repository-interface"
import { HttpResourceNotFoundError } from "@/errors/errors-type/http-resource-not-found-error"

class CreateReviewUseCase {
    constructor(
        private reviewRepository: ReviewRepositoryInterface,
        private custumerRepository: CustumerRepositoryInterface,
        private driverRepository: DriverRepositoryInterface,
    ) { }

    async execute(params: CreateReviewRequestParams) {

        const custumerById = await this.custumerRepository.getById(params.custumer_id)

        if(!custumerById){
            throw new HttpResourceNotFoundError("CUSTUMER")
        }
        
        const driverById = await this.driverRepository.getById(params.driver_id)

        if(!driverById){
            throw new HttpResourceNotFoundError("DRIVER")
        }
        
        // Validate if user exists
        const reviewAlreadyExists = await this.reviewRepository.create(params)

        //

        return { reviewAlreadyExists }
    }
}

export { CreateReviewUseCase }