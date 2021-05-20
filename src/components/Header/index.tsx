import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <Link href={`/`}>
                <a> <Image src="/logo.png" width={100} height={100} /> </a>
            </Link>
            <Link href={`/`}>
                 <a  className = {styles.selected}> Início </a>
            </Link>
            <Link href={`/paginadeprocessos`}>
                 <a  className ={styles.off} >Processos</a>
            </Link>
               
        </header>
    );
}