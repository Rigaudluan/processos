import next, { GetStaticProps } from "next";
import React, { Props } from "react";
import styles from './home.module.scss';
import Image from 'next/image';
import Link from "next/link";


import { api } from "../services/api";
import { SearchInput } from "../components/SearchInput";
import { TitleProcess } from "../components/TitleProcess/titleProcess";

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
   <main>
      <link rel="shortcut icon" href="/favicon.ico" />
      <TitleProcess name='Página Principal'/>
      <SearchInput />
      <div className={styles.principalContainer} >

      <div className={styles.mostSearchedProcessesContainer}>
        <p className={styles.mostSearchedTitle}>Principais processos</p>
        {mostSearchedProcesses.map(Processo => {
          return (
            <div key={Processo.id}>
              <Image
                className={styles.imageDetail}
                layout={"fixed"}
                height={65}
                width={65}
                src={Processo.thumbnail}
                alt={Processo.title}
              />
              <Link href={`/processos/${Processo.id}`}>
                <a >{Processo.title}
                <p>{Processo.description}</p></a>
              </Link>
              
            </div>
            )
          })}
      </div>

      <div className={styles.exclusiveProcessesContainer}>
<p className={styles.exclusiveProcessesTitle}>Só pra você</p>
    {exclusiveProcesses.map(Processo =>{
      return(
        <div key={Processo.id}>
          <Image
          className={styles.imageDetail}
          layout={"fixed"}
          height={65}
          width={65}
          src={Processo.thumbnail}
          alt={Processo.title}
        />
         <Link href={`/processos/${Processo.id}`}>
          <a >{Processo.title}
          <p>{Processo.description}</p></a>
        </Link>
        </div>
      )
    })}
</div></div>
   </main>
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



