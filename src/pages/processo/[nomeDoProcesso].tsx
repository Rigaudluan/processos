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
        <div className={styles.principalContainer}>
            <button>
                <img src="/arrow-left.svg" alt="voltar" />
            </button>

            <div className={styles.secondContainer} >

                <div className={styles.filesInContainer}>
                    <ul >
                        {processos.map(processo => {
                            return (
                                <div className={styles.process} key={processo.id}>
                                    <div className={styles.image}>
                                        <img src={processo.iconLink} alt={processo.name} />
                                    </div>
                                    <div className={styles.processText}>
                                        <Link href={`processo/${processo.id}`}>
                                            <a>{processo.name}</a>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </ul>
                </div>

                <div className={styles.openFileContainer} >
                    <section>
                        <iframe>

                        </iframe>
                    </section>

                </div>

            </div>
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