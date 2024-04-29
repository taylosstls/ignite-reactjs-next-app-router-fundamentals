interface ProductsProps {
  params: {
    data: {
      productId: string
      size: string
      color: string
    }
  }
}

// URL ficaria no formato:
// site.com.br/catalog/products/"productId/size/color"
export default function Product({ params }: ProductsProps) {
  const { productId, size, color } = params.data
  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
    </div>
  )
}
