import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Head from 'next/head'
import '../styles/globals.scss'
import { useState } from 'react';
import Login from './login'

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();
  
  if(user == null){
    return(
      <Login />
    )
  } else return (
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
