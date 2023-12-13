import { useState } from "react"
import { ProductType } from "./services/products"
import { Button, Col, Row } from "react-bootstrap"
import Image from "next/image"
import SuccessToast from "./SuccessToast"

type ProductDetailProps = {
  product: ProductType
}

const ProductDetails: React.FC<ProductDetailProps> = ({ product }) => {
  const [toastIOsOpen, setToastIsOpen] = useState(false)

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

        <h2>R$ {product.price}</h2>

        <p>
          <span className="d-block font-weight-bold">Descrição:</span>
          {product.description}
        </p>

        <p>Em estoque: {product.inStock}</p>

        <Button
          className="my-3 pb-2"
          onClick={() => {
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