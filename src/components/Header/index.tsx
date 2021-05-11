import styles from './styles.module.scss'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <nav>
                <img src="" alt="Cesar Process" />
                <a href="#">INÍCIO</a>
                <a href="#">PROCESSOS</a>
            </nav>
        </header>
    );
}