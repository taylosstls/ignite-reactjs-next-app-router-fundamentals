import { AddToCart } from './add-to-cart-button'

interface ProductsProps {
  params: {
    data: string[]
  }
}

/*
  Server Components => A gente não usa o JavaScript no lado do cliente
  o debug ocorre dentro do próprio NEXT server e não tem interatividade do usuário
*/

/*
  Streaming Server-side Rendering (SSR) => ler/escrever dados de forma parcial
  Renderizar um componente de forma parcial por um fetch de dados
*/

export default function Product({ params }: ProductsProps) {
  /*
    URL ficaria no formato:
    site.com.br/catalog/product/"productId/size/color"
  */
  const [productId, size, color] = params.data

  console.log(params)

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <AddToCart />
    </div>
  )
}
