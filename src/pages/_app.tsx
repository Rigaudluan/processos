import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { SearchInput } from '../components/SearchInput'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
   <div>
    <Header />
      <main>
      <SearchInput />
     <Component {...pageProps} />
     </main>
      <Footer />
   </div>
  )
}


export default MyApp
