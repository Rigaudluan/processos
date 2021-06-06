import styles from './home.module.scss';
import { Button  } from "../components/button/button";

export default function login(){
    return(
        <>
            <main className={styles.loginContainer}>
                <img src="/logo.png" width={100} alt="Cesar Processos" />

                <h1>Para continuar é só fazer o login com a sua conta google!</h1>
                
                <Button name='Entrar' />

            </main>
        </>
    )
}