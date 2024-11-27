import { Router } from "express"
import { createDriverFactory } from "@/usecases/driver/create-driver/factory-create-driver";
import { listDriverFactory } from "@/usecases/driver/list-drivers/factory-list-driver";

const driverRoutes = Router()

driverRoutes.post("/create", async (req, res) => {
    const controller = createDriverFactory();  
    await controller.handle(req, res);         
})

driverRoutes.get("/list", async (req, res) => {
    const controller = listDriverFactory();  
    await controller.handle(req, res);         
})

export { driverRoutes }