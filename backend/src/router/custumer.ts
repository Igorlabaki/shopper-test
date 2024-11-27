import { createCustumerFactory } from "@/usecases/custumer/create-custumer/factory-create-custumer";
import { Router } from "express"

const custumerRoutes = Router()

custumerRoutes.post("/create", async (req, res) => {
    const controller = createCustumerFactory();  
    await controller.handle(req, res);         
})

export { custumerRoutes }