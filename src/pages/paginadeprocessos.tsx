import { GetStaticProps, GetStaticPaths } from "next";
import styles from './home.module.scss';
import { SearchInput } from "../components/SearchInput";
import { TitleProcess } from "../components/TitleProcess/titleProcess";
import { api } from "../services/api";
import Link from "next/link";
import Image from 'next/image';

type TodosProcessos = {
    id: string,
    title: string,
    thumbnail: string,
    description: string
}
type ProcessoProps = {
    processos : TodosProcessos[];
}
  

export default function paginadeprocessos({processos }: ProcessoProps){
    return(
        <main>
            <TitleProcess name='Processos'/>
            <SearchInput />

            <ul className={styles.principalContainer2}>
            {processos.map(processo => {
                return(
                    <div key={processo.id}>
                        <img src={processo.thumbnail} alt="" />
                        <Link href={`/processos/${processo.id}`}>
                            <a >{processo.title}
                            <p>{processo.description}</p></a>
                        </Link>
                     </div>
                )
            })}
            </ul>
        </main>
    )
}

export const getStaticProps : GetStaticProps = async () => {
 const { data } = await api.get('processos', {
     params:{
         _limit: 12,
         _sort: 'id',
         _order: 'desc'
     }
 })

 const todososprocessos = data.map(TodosProcessos => {
    return{
        id: TodosProcessos.id,
        title: TodosProcessos.title,
        thumbnail: TodosProcessos.thumbnail,
        description: TodosProcessos.description
        
    }
 })

    return{
        props:{
            processos: data,
        },
        revalidate: 60 * 10
    }  
}