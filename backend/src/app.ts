import cors from 'cors'
import express from 'express'
import { rideRoutes } from './router/ride'
import { driverRoutes } from './router/driver'
import { reviewRoutes } from './router/review'
import { custumerRoutes } from './router/custumer'

export const app = express()

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  }),
)

app.use(express.json())

app.use('/ride', rideRoutes)
app.use('/driver', driverRoutes)
app.use('/review', reviewRoutes)
app.use('/custumer', custumerRoutes)
