import { Header } from "../components/Header/index";
import { Footer } from "../components/Footer/index";
import { SearchInput } from "../components/SearchInput/index";

export default function Home() {
  return (
    <body>
      <Header />
      <main>
      <SearchInput />
      </main>
      <Footer />
    </body>
  )
}
