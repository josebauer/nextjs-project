import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
      <Container>
        <Link href="/" className="navbar-brand">
          E-COMMERCE
        </Link>
        <Nav>
          <Link href="/" className="nav-link">
            Início
          </Link>
          <Link href="/products" className="nav-link">
            Produtos
          </Link>
          <Link href="/cart" className="nav-link">
            Carrinho
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
} 