import styles from './home.module.scss';
import { TitleProcess } from "../components/TitleProcess/titleProcess";

import { api, linkApi } from "../services/api";
import Link from "next/link";

export default function login(){
    return(
        <>
            <main className={styles.loginContainer}>
                <TitleProcess name='Para continuar é só fazer o login com a sua conta google!' />
                <Link href={`${linkApi}/login`}>
                <a>Vamos lá</a>
                </Link>
            </main>
        </>
    )
}