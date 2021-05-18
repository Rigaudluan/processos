import { Header } from "../components/Header/index";
import { Footer } from "../components/Footer/index";
import { SearchInput } from "../components/SearchInput/index";
import React from "react";
import { GetStaticProps } from "next";
import { api } from "../services/api";
import styles from './home.module.scss';

type Processo = {
  id: string,
  title: string,
  area: string,
  latest_modification: string,
  thumbnail: string,
  description: string
}

type HomeProps = {
  PrincipalProcesses: Processo[],
  RecomendedProcesses: Processo[]
}


export default function Home(props) {
  return (
    <body>
      <div className={styles.processesShowcase}>
        <section className={styles.mostSearchedProcesses}>
          <h2>Processos mais pesquisados</h2>
        </section>
        <section className={styles.exclusiveProcesses}>
          <h2>Excluisvos para você</h2>
        </section>
      </div>
    </body>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('processos', {
    params: {
      _limit: 12,
      _sort: 'id',
      _order: 'desc'
    }
  })

  const Processo = data.map(processo => {
    return {
      id: processo.id,
      title: processo.title,
      area: processo.area,
      latest_modification: processo.latest_modification,
      thumbnail: processo.thumbnail,
      description: processo.description
    };
  })

  return {
    props: {
      Processo
    },
    revalidate: 60 * 10
  }
}



