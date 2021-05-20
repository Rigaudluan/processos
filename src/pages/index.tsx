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
    <div className={styles.mostSearchedProcessesContainer}>
      <p className={styles.mostSearchedTitle}>Principais processos</p>
      <div className={styles.line}></div>
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
            <a href="">{Processo.title}
              <p>{Processo.description}</p></a>
          </div>
        )
      })}
    </div>
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

  const mostSearchedProcesses = Processo.slice(0, 4);
  const exclusiveProcesses = Processo.slice(2, Processo.length);

  return {
    props: {
      mostSearchedProcesses,
      exclusiveProcesses,
    },
    revalidate: 60 * 10
  }
}



