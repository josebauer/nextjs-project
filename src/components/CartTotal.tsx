import { useCart } from "../hooks/useCart"
import { Card } from "react-bootstrap"

const CartTotal = () => {
  const { cart } = useCart()

  const amount = cart.reduce((total, product) => total + product.price, 0)

  return (
    <Card className="ms-auto" style={{ maxWidth: '20rem' }}>
      <Card.Body className="d-flex justify-content-between">
        <strong>
          Total:
        </strong>
        <span>
          {amount.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </span>
      </Card.Body>
    </Card>
  )
}

export default CartTotal