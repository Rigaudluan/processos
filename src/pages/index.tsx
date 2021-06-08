import next, { GetStaticProps } from "next";
import React, { Props } from "react";
import styles from './home.module.scss';
import Image from 'next/image';
import Link from "next/link";

import { api } from "../services/api";
import { SearchInput } from "../components/SearchInput";
import { TitleProcess } from "../components/TitleProcess/titleProcess";

type TodosProcessos = {
  id: string,
  name: string,
  iconLink: string
}

type ProcessoProps = {
  processos: TodosProcessos[];
}

export default function Home({ processos }: ProcessoProps){

  return (
    <main>
            <TitleProcess name='Seja bem-vindx!' />
            <div className={styles.mainContainer}>
            <div className={styles.searchInputContainer}>
              <h2>Faça sua busca </h2>
              <SearchInput />
              </div>
              <hr />
            <div className={styles.processesContainer}><ul >
                {processos.map(processo => {
                    return (
                        <div className={styles.containerGeral}>
                            <div></div>
                            <div className={styles.principalContainer2} key={processo.id}>
                                <div className={styles.img}>
                                    <img src={processo.iconLink} alt={processo.name} />
                                </div>
                                <div>
                                    <Link href={`processo/${processo.id}`}>
                                        <a>{processo.name}</a>
                                    </Link>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    )
                })}
            </ul> </div>  
            </div>            
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('files')

  const todososprocessos = data.files.map(TodosProcessos => {
      return {
          id: TodosProcessos.id,
          name: TodosProcessos.name,
          iconLink: TodosProcessos.iconLink
      }
  })

  return {
      props: {
          processos: data.files,
      },
      revalidate: 60 * 10
  }
}


