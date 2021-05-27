import next, { GetStaticProps } from "next";
import React, { Props } from "react";
import styles from './home.module.scss';
import Image from 'next/image';
import Link from "next/link";

import { typeFunc } from "../utils/typeSelect"
import { api } from "../services/api";
import { SearchInput } from "../components/SearchInput";
import { TitleProcess } from "../components/TitleProcess/titleProcess";

type Processo = {
  id: string,
  name: string,
  thumbnail: string,
}
type HomeProps = {
  mostSearchedProcesses: Processo[],
  exclusiveProcesses: Processo[]
}

var file;


export default function Home({ mostSearchedProcesses, exclusiveProcesses }: HomeProps) {

  return (
    <main>
      <link rel="shortcut icon" href="/favicon.ico" />
      <TitleProcess name='Página Principal' />
      <SearchInput />
      <div className={styles.principalContainer}>

          <div className={styles.mostSearchedProcesses}>
            <h3>Principais Processos</h3>
            {mostSearchedProcesses.map(Processos =>{
              return(
                <main key={Processos.id}>
                  <div className={styles.img} >
                    <img src={Processos.thumbnail} alt={Processos.name}/>
                  </div>

                  <div className={styles.title}>
                    <Link href={`/files/${Processos.id}`}>
                      <a>{Processos.name}</a>
                    </Link>
                  </div>

                </main>
              )
            })}
          </div>
          <hr />
          <div className={styles.exclusiveProcesses}>
          <h3>Exclusivamente pra você</h3>
          {exclusiveProcesses.map(Processos =>{
              return(
                <main>

                  <div className={styles.img} >
                    <img src={Processos.thumbnail} alt={Processos.name}/>
                  </div>

                  <div className={styles.title}>
                    <Link href={`/files/${Processos.id}`}>
                      <a>{Processos.name}</a>
                    </Link>
                  </div>

                </main>
              )
            })}
          </div>

      </div>
    </main>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('files', {
    params: {
      _limit: 12,
      _sort: 'id',
      _order: 'desc'
    }
  })

  const Processo = data.map(processo => {
    return {
      id: processo.id,
      name: processo.name,
      thumbnail: processo.iconLink
    }
  })

  const mostSearchedProcesses = Processo.slice(0, 5);
  const exclusiveProcesses = Processo.slice(2, Processo.length);

  return {
    props: {
      mostSearchedProcesses,
      exclusiveProcesses,
    },
    revalidate: 60 * 10 
  }
}



