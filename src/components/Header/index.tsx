import styles from './styles.module.scss'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <nav>
                <img src="/logo.png" alt="Cesar Process" />
                <a href="#" className = {styles.selected}> Início </a>
                <a href="#">Prcessos</a>
            </nav>
        </header>
    );
}