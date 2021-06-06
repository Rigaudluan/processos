import { GetStaticProps, GetStaticPaths } from "next";
import styles from './home.module.scss';
import { SearchInput } from "../components/SearchInput";
import { TitleProcess } from "../components/TitleProcess/titleProcess";
import { api } from "../services/api";
import Link from "next/link";

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
        <main>

            <TitleProcess name='Processos' />
            <SearchInput />
            <ul >
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
            </ul>
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