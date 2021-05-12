import styles from './styles.module.scss'

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerObject1}><p>© Copyright 2021-2021 CESAR Processos Developed by Programadores HTML</p></div>
            <div className={styles.footerObject2}><p>Algum problema? <a href="#"><b>Relate aqui!</b></a></p></div>
        </footer>
    );
}