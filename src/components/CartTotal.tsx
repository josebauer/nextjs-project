import { useCart } from "@/hooks/UseCart"
import { Card } from "react-bootstrap"

const CartTotal = () => {
  const { cart } = useCart()

  return (
    <Card className="ms-auto" style={{ maxWidth: '20rem' }}>
      <Card.Body className="d-flex justify-content-between">
        <strong>
          Total:
        </strong>
        <span>
          R$ {cart.reduce((total, product) => total + product.price, 0)}
        </span>
      </Card.Body>
    </Card>
  )
}

export default CartTotal