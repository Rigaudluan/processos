import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Head from 'next/head'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cesar Processos</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>

      <Header />
        <main>
          <Component {...pageProps} />
        </main>
      <Footer />
    </>
  )
}


export default MyApp
