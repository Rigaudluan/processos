import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
   <div>
    <Header />
      <main>
     <Component {...pageProps} />
     </main>

   </div>
  )
}


export default MyApp
