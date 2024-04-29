interface ProductsProps {
  params: {
    id: string
  }
}

export default function Product(props: ProductsProps) {
  return <h1>Product: {props.params.id}</h1>
}
