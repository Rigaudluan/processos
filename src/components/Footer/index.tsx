import styles from './styles.module.scss'

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div>
                <p>© Copyright 2021-2021 CESAR Processos Developed by Programadores HTML</p>
                <p>Algum problema?<a href="#">Relate aqui!</a></p>
            </div>
        </footer>
    );
}