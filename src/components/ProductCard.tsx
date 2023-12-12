import { useState } from "react"
import { ProductType } from "./services/products"
import { Button, Card, CardSubtitle } from "react-bootstrap"
import Link from "next/link"
import Image from "next/image"
import SuccessToast from "./SuccessToast"

type ProductCardProps = {
  product: ProductType
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false)
  const { id, name, imageUrl, price } = product

  return (
    <>
      <Card>
        <Link href={`/products/${id}`}>
          <Image className="card-img-top" src={imageUrl} alt={product.name} height={500} width={600}/>
        </Link>

        <Card.Body>
          <Link href={`/products/${id}`}>
            <h5 className="card-title" style={{ cursor: 'pointer' }}>
              {name}
            </h5>
          </Link>

          <CardSubtitle className="mb-3 text-muted">
            R$ {price}
          </CardSubtitle>

          <Button
            className="pb-2"
            onClick={() => {
              setToastIsOpen(true)
              setTimeout(() => setToastIsOpen(false), 1000 * 3)
            }}
          >
            Adicionar ao Carrinho
          </Button>
        </Card.Body>
      </Card>

      <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen}/>
    </>
  )
  
}

export default ProductCard