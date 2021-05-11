import styles from './styles.module.scss'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <nav><ul>
                <li><img src="" alt="Cesar Process" /></li>
                <li><a href="#">INÍCIO</a></li>
                <li><a href="#">PROCESSOS</a></li>
            </ul></nav>
        </header>
    );
}