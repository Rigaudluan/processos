import { Header } from "../components/Header/index";
import { Footer } from "../components/Footer/index";
import { SearchInput } from "../components/SearchInput/index";
import React from "react";
import PrincipalProcess from "../components/PrincipalProcess";


export default function Home(props) {
  return (
    <body>
      <Header />
      <main>
      <PrincipalProcess />
      <SearchInput />
      </main>
      <Footer />
    </body>
  )
}


