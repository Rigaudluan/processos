import { GetStaticProps, GetStaticPaths } from "next";
import styles from './process.module.scss';
import { SearchInput } from "../../components/SearchInput";
import { TitleProcess } from "../../components/TitleProcess/titleProcess";
import { api } from "../../services/api";
import Link from "next/link";
import Image from "next/image";

type TodosProcessos = {
    id: string,
    name: string,
    iconLink: string
}

type ProcessoProps = {
    processos: TodosProcessos[];
}


export default function paginadeprocessos({ processos }: ProcessoProps) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <button>
                    <img src="/arrow-left.svg" alt="voltar" />
                </button>
            </header>
            <div className={styles.nomeProcess}>

            </div>
            <main className={styles.main}>
                <ul >
                    {processos.map(processo => {
                        return (//<Image src="/arrow-left.svg" className={styles.goBack} width={28} height={28}/>

                            <div className={styles.process} key={processo.id}>
                                <div className={styles.image}>
                                    <img src={processo.iconLink} alt={processo.name} />
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
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const { nomeDoProcesso } = ctx.params;

    const { data } = await api.get(`/processo/${nomeDoProcesso}`)


    const processo = data.files.map(process => {
        return {
            id: process.id,
            name: process.name,
            iconLink: process.iconLink
        }
    }
    )
    return {
        props: {
            processos: data.files,
        },
        revalidate: 60 * 10
    }
}