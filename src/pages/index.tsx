import { Header } from "../components/Header/index";
import { Footer } from "../components/Footer/index";
import { SearchInput } from "../components/SearchInput/index";
import React, { Props } from "react";
import next, { GetStaticProps } from "next";
import { api } from "../services/api";
import styles from './home.module.scss';
import Image from 'next/image';

type Processo = {
  id: string,
  title: string,
  area: string,
  latest_modification: string,
  thumbnail: string,
  description: string
}

type HomeProps = {
  mostSearchedProcesses: Processo[],
  exclusiveProcesses: Processo[]
}


export default function Home({ mostSearchedProcesses, exclusiveProcesses }: HomeProps) {
  return (
    <body className={styles.homepage}>
      <div className={styles.processesShowcase}>
        <section className={styles.mostSearchedProcesses}>
          <h2>Processos mais pesquisados</h2>

          <ul>
            {mostSearchedProcesses.map(Processo => {
              return (
                <li key={Processo.id}>
                  <Image
                    className={styles.imageDetail}
                    height={48}
                    width={48}
                    src={Processo.thumbnail}
                    alt={Processo.title}
                  />
                  <div className={styles.processDetail}>
                    <a href="">{Processo.title}</a>
                    <p>{Processo.description}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
        <section className={styles.exclusiveProcesses}>
          <h2>Excluisvos para você</h2>

          <ul>
            {exclusiveProcesses.map(Processo => {
              return (
                <li key={Processo.id}>
                  <Image
                    className={styles.imageDetail}
                    height={48}
                    width={48}
                    src={Processo.thumbnail}
                    alt={Processo.title}
                  />
                  <div className={styles.processDetail}>
                    <a href="">{Processo.title}</a>
                    <p>{Processo.description}</p>
                  </div>
                </li>
              )
            })}
          </ul>
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

  const mostSearchedProcesses = Processo.slice(0, Processo.length);
  const exclusiveProcesses = Processo.slice(0, Processo.length);

  return {
    props: {
      mostSearchedProcesses,
      exclusiveProcesses,
    },
    revalidate: 60 * 10
  }
}



