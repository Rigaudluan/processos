import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head';

import { api } from '../../services/api';
import styles from './process.module.scss'

type Processo = {
  id: string,
  name: string,
  iconLink: string
};
type ProcessoProps = {
  processo: Processo
}


export default function processoAberto({processo}: ProcessoProps){
const router = useRouter();

  if(router.isFallback){
    return(
      <div>
         <Head>
      <title>{processo.name} | Cesar Processos </title>
      </Head>
        <p>Carregando...</p>
      </div>
    )
  }
    

    return(
      <div className={styles.principalContainer}>
         <div className={styles.titleArea}>
          <h1 className={styles.title}>{processo.name}</h1> 
         </div>

         <div className={styles.container}>
          <div className={styles.side}>
          <div  className={styles.files}>
  .
          </div>
       </div>
        <div className={styles.renderFiles}>
.
        </div>
       </div>
      </div>
      
    )

}

export const getStaticPaths: GetStaticPaths = async () => {
  const {data} = await api.get('files')

  const paths = data.files.map(process =>{
    return{
      params:{
        slug : process.id
      }
    }
  })
      return{
        paths,
        fallback: 'blocking'
    }

  }

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  const {data} = await api.get(`processo/${slug}`)

  const processo = data.files.map(TodosProcessos => {
    return{
        id: TodosProcessos.id,
        name: TodosProcessos.name,
        iconLink: TodosProcessos.iconLink
    }
 })

  return {
    props: {
      processo: data.files,
    },
    revalidate: 60 * 10
  }
}
