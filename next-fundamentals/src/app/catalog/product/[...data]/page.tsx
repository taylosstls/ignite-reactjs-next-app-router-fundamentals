// Client Components => O JS é enviado ao navegador e passa a ter interatividade na tela
'use client'
interface ProductsProps {
  params: {
    data: [productId: string, size: string, color: string]
  }
}

/*
 Server Components => A gente não usa o JavaScript no lado do cliente
 o debug ocorre dentro do próprio NEXT server e não tem interatividade do usuário
*/

export default function Product({ params }: ProductsProps) {
  /*
    URL ficaria no formato:
    site.com.br/catalog/product/"productId/size/color"
  */
  const [productId, size, color] = params.data

  console.log(params)

  function addToCart() {
    console.log('Adicionou ao carrinho')
  }

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <button
        className="mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={addToCart}
      >
        Adicionar ao carrinho
      </button>
    </div>
  )
}
