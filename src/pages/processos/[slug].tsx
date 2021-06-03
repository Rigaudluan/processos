import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head';

import { api } from '../../services/api';
import styles from './process.module.scss'

type Processo = {
  id: string,
  title: string,
  area: string,
  latest_modification: string,
  thumbnail: string,
  description: string
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
      <title>{processo.title} | Cesar Processos </title>
      </Head>
        <p>Carregando...</p>
      </div>
    )
  }
    

    return(
      <div className={styles.principalContainer}>
         <div className={styles.titleArea}>
          <h1 className={styles.title}>{processo.title}</h1> 
          <a href=""><img src="/settings.svg" alt="" /></a>
         </div>

         <div className={styles.container}>
          <div className={styles.side}>
          <div  className={styles.files}>
  .
          </div>
          <button>
            <img src="/plus.svg" alt="" />
          </button>
       </div>
        <div className={styles.renderFiles}>
.
        </div>
       </div>
      </div>
      
    )

}

export const getStaticPaths: GetStaticPaths = async () => {
  const {data} = await api.get('processos', {

     params: {
      _limit: 2,
      order: 'desc',
    }
  });

  const paths = data.map(process =>{
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

  const {data} = await api.get(`/files/${slug}`)

  const processo = {
      id: data.id,
      title: data.title,
      area: data.area,
      latest_modification: data.latest_modification,
      thumbnail: data.thumbnail,
      description: data.description
    };

  return {
    props: {
      processo,
    },
    revalidate: 60 * 10
  }
}
