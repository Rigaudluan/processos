import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router'

export function Header(props){

    /* Descobre página e muda o estado do page */
    var page = true;
    const router = useRouter();
    const RouterName = router.pathname
     if(RouterName == "/"){
            page = true
        }else page = !page
    
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
                    <a className =  { page? styles.selected : styles.off }> Início </a>
                </Link>
                <p className={styles.selected} >
                    Olá, <span>{props.user.name}</span>
                </p>
        </header>
    );
}

