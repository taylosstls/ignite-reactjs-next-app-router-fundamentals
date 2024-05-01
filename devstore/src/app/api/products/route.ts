import data from './data.json'

interface dataProps {
  id: number
  title: string
  slug: string
  price: number
  image: string
  description: string
  featured: boolean
}

export async function GET(): Promise<Response> {
  const responseData: dataProps[] = data.products

  return Response.json(responseData)
}
