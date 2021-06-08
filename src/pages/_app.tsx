import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Head from 'next/head'
import '../styles/globals.scss'
import { useState } from 'react';
import Login from './login'

function MyApp({ Component, pageProps }) {


  const [user, setUser] = useState(null);

  const actionLoginDataGoogle = async (user) => {
    let newUser = {
      id: user.uid,
      name: user.displayName
    }

    setUser(newUser)
  }

  if (user === null) {
    return (
      <Login onReceiveGoogle={actionLoginDataGoogle} />
    )


  } else return (
    <>
      <Head>
        <title>Cesar Processos</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>

      <Header user={user} />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}




export default MyApp
