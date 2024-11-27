import { Router } from "express"
import { createReviewFactory } from "@/usecases/review/create-review/factory-create-driver";

const reviewRoutes = Router()

reviewRoutes.post("/create", async (req, res) => {
    const controller = createReviewFactory();  
    await controller.handle(req, res);         
})

/* reviewRoutes.post("/list", async (req, res) => {
    const controller = listReviewFactory();  
    await controller.handle(req, res);         
})
 */
export { reviewRoutes }