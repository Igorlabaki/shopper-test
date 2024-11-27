import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
    DIRECT_URL: z.string(),
    DATABASE_URL: z.string(),
    GOOGLE_API_KEY: z.string(),
    PORT: z.coerce.number().default(8080),
    NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
})

const _env = envSchema.safeParse(process.env)

if(_env.success == false){
    console.error('Invalid enviroment variables', _env.error.format)
    throw new Error('Invalid enviroment variables')
}


export const env = _env.data