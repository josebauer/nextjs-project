import { ProductType } from "@/components/services/products"

type CartContextType = {
  cart: ProductType[]
  addProduct: (product: ProductType) => void
  removeProduct: (productId: number) => void
}