import styles from './home.module.scss';
import { Button } from "../components/button/button";
import ApiFB from '../apiFB'

export default function login({ onReceiveGoogle }) {

    //Logar conta no google
    const actionLoginGoogle = async () => {
        let result = await ApiFB.googleLogar();

        if (result) {
            onReceiveGoogle(result.user)
        } else {
            alert('Ops... deu erro aí! Reveja seus dados e tente novamente')
        }
    }

    return (
        <>
            <main className={styles.loginContainer}>
                <img src="/logo.png" width={100} alt="Cesar Processos" />

                <h1>Para continuar é só fazer o login com a sua conta google!</h1>

                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />

                <div className={styles.googleBtn}>
                    <div className={styles.googleIconWrapper}>
                        <img className={styles.googleIcon} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                    </div>
                    <button onClick={actionLoginGoogle} className={styles.btnText} ><b>Logue com o google!</b></button>
                </div>





            </main>
        </>
    )
}