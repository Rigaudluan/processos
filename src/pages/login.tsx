import styles from './home.module.scss';
import { Button  } from "../components/button/button";
import ApiFB from '../apiFB'

export default function login({onReceiveGoogle}){

    const actionLoginGoogle = async () =>{
     let result = await ApiFB.googleLogar();

     if(result){
        onReceiveGoogle(result.user)
     }else{
        alert('Ops... deu erro aí! Reveja seus dados e tente novamente')
     }
    }

    return(
        <>
            <main className={styles.loginContainer}>
                <img src="/logo.png" width={100} alt="Cesar Processos" />

                <h1>Para continuar é só fazer o login com a sua conta google!</h1>
                
                <button onClick={actionLoginGoogle} >
                Entrar
                </button>

            </main>
        </>
    )
}