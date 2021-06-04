import { GetStaticProps, GetStaticPaths } from "next";
import styles from './process.module.scss';
import { SearchInput } from "../../components/SearchInput";
import { TitleProcess } from "../../components/TitleProcess/titleProcess";
import { api } from "../../services/api";
import Link from "next/link";

type TodosProcessos = {
    id: string,
    name: string,
    iconLink: string
}

type ProcessoProps = {
    processos : TodosProcessos[];
}
  

export default function paginadeprocessos({processos }: ProcessoProps){
    return(
        <main>
            <ul >
            {processos.map(processo => {
                return(
                    <div className={styles.principalContainer2} key={processo.id}>
                        <div className={styles.img}>
                        <img src={processo.iconLink} alt={processo.name}/>
                        </div>
                        <div>
                        <Link href={`processo/${processo.id}`}>
                            <a>{processo.name}</a>
                        </Link>
                     </div>
                    </div>
                )
            })}
            </ul>
        </main>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps : GetStaticProps = async (ctx) =>{

  const {nomeDoProcesso} = ctx.params;

  const {data} = await api.get(`/processo/${nomeDoProcesso}`)
 

  const processo = data.files.map(process =>{
        return{
          id: process.id,
          name: process.name,
          iconLink: process.iconLink
        }
      }
    )
    return{
        props:{
            processos: data.files,
        },
        revalidate: 60 * 10
    }  
}