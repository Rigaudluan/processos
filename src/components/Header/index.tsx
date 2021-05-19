import styles from './styles.module.scss'
import Image from 'next/image';

export function Header(){
    return(
        <header className={styles.headerContainer}>
                <ul>
                    <li>
                        <a href=""><Image 
                        /></a>
                    </li>
                    <li>
                        <a href="#" className = {styles.selected}>Início</a>
                    </li>
                    <li>
                        <a href="#" className ={styles.off} >Processos</a>
                    </li>
                </ul>
        </header>
    );
}