import { Router } from "express"
import { confirmRideFactory } from "@/usecases/ride/confirm-ride/factory-confirm-ride";
import { estimateRideFactory } from "@/usecases/ride/estimate-ride/factory-estimate-ride";

const rideRoutes = Router()

rideRoutes.post("/confirm", async (req, res) => {
    const controller = confirmRideFactory();  
    await controller.handle(req, res);         
})

rideRoutes.post("/estimate", async (req, res) => {
    const controller = estimateRideFactory();  
    await controller.handle(req, res);         
})

export { rideRoutes }