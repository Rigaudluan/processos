import styles from './styles.module.scss'

export function Header(){
    return(
        <header className={styles.headerContainer}>
                <a href=""><img src="/logo.png" alt="Cesar Process" /></a>
                <a href="#" className = {styles.selected}> Início </a>
                <a href="#" className ={styles.off} >Processos</a>
        </header>
    );
}