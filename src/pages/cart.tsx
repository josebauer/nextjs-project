import CartTable from '@/components/CartTable'
import Header from '@/components/Header'
import Head from 'next/head'
import { Container } from 'react-bootstrap'

export default function Cart() {
  return (
    <>
      <Head>
        <title>Carrinho</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Container className='mb-5'>
          <h1 className='my-5'>
            Carrinho
          </h1>

          <CartTable />
        </Container>
      </main>
    </>
  )
}