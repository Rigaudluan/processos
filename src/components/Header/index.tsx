import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';;

var page = true


function initialPage(){
    page = true
}

function pageProcess(){
    page = false
}

export function Header(){
    return(
        <header className={styles.headerContainer}>
           <button onClick={initialPage} >
            <Link href={`/`}>
                    <a className={styles.imageDetail}>
                    <Image 
                    src="/logo.png"
                    width={65}
                    height={65}
                    />
                    </a>
                </Link>
           </button>
           <button onClick={initialPage}>
                <Link href={`/`}>
                    <a className =  { page? styles.selected : styles.off }> Início </a>
                </Link>
           </button>
            <button onClick={pageProcess}>
                <Link href={`/paginadeprocessos`}>
                    <a className = { page? styles.off  : styles.selected} >Processos</a>
                </Link>
            </button>
        </header>
    );
}
