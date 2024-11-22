import cors from 'cors'
import express from 'express'

export const app = express()

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  }),
)

app.use(express.json())

/* app.use('/auth', authRoutes) */
