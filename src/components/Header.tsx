import Image from "next/image";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-primary py-3" data-bs-theme="dark">
      <Container>
        <Link href="/" className="navbar-brand">
          Tech Shop
        </Link>
        <Nav className="align-items-center h6 g-4">
          <div className="account">
            <div className="d-flex text-light">
              Faça o
              <Link href="/login" className="nav-link py-0">
                login
              </Link>
            </div>
            <div className="d-flex text-light">
              ou
              <Link href="/register" className="nav-link py-0">
                cadastre-se
              </Link>
            </div>
          </div>
          <Link href="/products" className="nav-link pe-3">
            Produtos
          </Link>
          <Link href="/cart" className="d-flex align-items-center nav-link border border-white rounded">
            <Image className="me-2" src='/cart.png' alt='carrinho de compras' width={30} height={30} />
            Carrinho
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
} 