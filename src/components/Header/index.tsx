import styles from './styles.module.scss'
import Image from 'next/image';

export function Header(){
    return(
        <header className={styles.headerContainer}>
                <a href={`/`}> <Image src="/logo.png" width={100} height={100} /> </a>
                <a href={`/`} className = {styles.selected}> Início </a>
                <a href={`/paginadeprocessos`} className ={styles.off} >Processos</a>
        </header>
    );
}