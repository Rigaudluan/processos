import { Header } from "../components/Header/index";
import { Footer } from "../components/Footer/index";
import { MostSearchedProcess } from "../components/MostSearchedProcess/index";

export default function Home() {
  return (
    <body>
      <Header />
      <main>
      <MostSearchedProcess />
      </main>
      <Footer />
    </body>
  )
}
