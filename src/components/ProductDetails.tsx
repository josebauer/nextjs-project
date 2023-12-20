import { useState } from "react"
import { ProductType } from "./services/products"
import { Button, Col, Row } from "react-bootstrap"
import Image from "next/image"
import SuccessToast from "./SuccessToast"
import { useCart } from "../hooks/useCart"

type ProductDetailProps = {
  product: ProductType
}

const ProductDetails: React.FC<ProductDetailProps> = ({ product }) => {
  const [toastIOsOpen, setToastIsOpen] = useState(false)
  const { addProduct } = useCart()

  return (
    <Row>
      <Col lg={6}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          height={500}
          width={600}
        />
      </Col>

      <Col lg={6}>
        <h1>{product.name}</h1>

        <h2 className="text-muted">
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </h2>

        <p>
          <span className="d-block font-weight-bold my-3">Descrição:</span>
          {product.description}
        </p>

        <p className="text-muted">Em estoque: {product.inStock}</p>

        <Button
          className="my-3 pb-2"
          onClick={() => {
            addProduct(product)
            setToastIsOpen(true)
            setTimeout(() => setToastIsOpen(false), 1000 * 3)
          }}
        >
          Compre agora
        </Button>

        <SuccessToast toastIsOpen={toastIOsOpen} setToastIsOpen={setToastIsOpen} />
      </Col>
    </Row>
  )
}

export default ProductDetails