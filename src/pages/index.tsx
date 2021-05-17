import { Header } from "../components/Header/index";
import { Footer } from "../components/Footer/index";
import { SearchInput } from "../components/SearchInput/index";
import React from "react";
import { GetStaticProps } from "next";
import { api } from "../services/api";

type Process = {
  id: string,
  title: string,
  area: string,
  latest_modification: string,
  thumbnail: string,
  description: string
}

type HomeProps = {
  PrincipalProcesses: Process[],
  RecomendedProcesses: Process[]
}


export default function Home(props) {
  return (
    <body>
      <Header />
      <main>
      <SearchInput />
      <p> {JSON.stringify(props.processes)}</p>
      </main>
      <Footer />
    </body>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const { data } = await api.get('processes', {
    params:{
    _limit: 12,
    _sort: 'id',
    _order: 'desc'
    }

  })

  return{
    props: {
      processes: data,
    },
    revalidate: 60 * 10
  }
}



