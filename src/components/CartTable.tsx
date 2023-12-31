import { useCart } from "../hooks/useCart"
import { ProductType } from "./services/products"
import { Button, Col, Row, Table } from "react-bootstrap"
import Image from "next/image"
import { useEffect, useState } from "react"

type CartEntry = {
  product: ProductType
  quantity: number
}

const CartTableRow = (props: {
  entry: CartEntry
}) => {
  const { addProduct, removeProduct } = useCart()
  const quantityItems = (props.entry.product.price * props.entry.quantity)

  return (
    <tr>
      <td>
        <Row className="align-items-center">
          <Col>
            <Image
              src={props.entry.product.imageUrl}
              alt={props.entry.product.name}
              height={50}
              width={70}
            />
          </Col>
          <Col xs={8} md={10}>
            {props.entry.product.name}
          </Col>
        </Row>
      </td>
      <td>
        {props.entry.product.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}
      </td>
      <td>{props.entry.quantity}</td>
      <td>
        {quantityItems.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}
      </td>
      <td>
        <Button
          size="sm"
          onClick={() => addProduct(props.entry.product)}
        >
          +
        </Button>
        {' '}
        <Button
          className="btn-danger"
          size="sm"
          onClick={() => removeProduct(props.entry.product.id)}
        >
          -
        </Button>
      </td>
    </tr>
  )
}

export default function CartTable() {
  const [cartEntries, setCartEntries] = useState<CartEntry[]>([])
  const { cart } = useCart()

  useEffect(() => {
    const entriesList = cart.reduce((list, product) => {
      const entryIndex = list.findIndex(entry => entry.product.id === product.id)

      if (entryIndex === -1) {
        return [
          ...list,
          {
            product,
            quantity: 1
          }
        ]
      }

      list[entryIndex].quantity++
      return list

    }, [] as CartEntry[])

    entriesList.sort((a, b) => a.product.id - b.product.id)
    setCartEntries(entriesList)

  }, [cart])

  return (
    <Table responsive className="align-middle" style={{ minWidth: '32rem' }}>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Qtd.</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cartEntries.map(entry => <CartTableRow key={entry.product.id} entry={entry} />)}
      </tbody>
    </Table>
  )
}