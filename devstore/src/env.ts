import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url()
})

// Valida se as variáveis do .env.local estão seguindos os formatos desejados
const parsedEnv = envSchema.safeParse(process.env)

if(!parsedEnv.success) {
  console.error('Invalid environment variables',
    parsedEnv.error.flatten().fieldErrors
  )

  throw new Error ('Invalid environment variables.')
}

export const env = parsedEnv.data