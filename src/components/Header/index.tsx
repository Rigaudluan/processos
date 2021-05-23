import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';


export function Header(){
    return(
        <header className={styles.headerContainer}>
            <Link href={`/`}>
                <a className={styles.imageDetail}>
                <Image 
                src="/logo.png"
                width={65}
                height={65}
                />
                </a>
            </Link>
            <Link href={`/`}>
                 <a  className = { styles.selected }> Início </a>
            </Link>
            <Link href={`/paginadeprocessos`}>
                 <a className ={ styles.off } >Processos</a>
            </Link>
        </header>
    );
}