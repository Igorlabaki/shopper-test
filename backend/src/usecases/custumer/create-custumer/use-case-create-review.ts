import { CustumerRepositoryInterface } from "@/repositories/interfaces/custumer-repository-interface"
import { CreateCustumerRequestParams } from "@/zod/custumer/create-custumer-params-schema"

class CreateCustumerUseCase {
    constructor(
        private custumerRepository: CustumerRepositoryInterface,
    ) { }

    async execute(params: CreateCustumerRequestParams) {

        // Validate if user exists
        const custumerAlreadyExists = await this.custumerRepository.create(params)

        //

        return  custumerAlreadyExists 
    }
}

export { CreateCustumerUseCase }