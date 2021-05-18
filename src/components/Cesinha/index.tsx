import styles from './styles.module.scss'

export default function Cesinha() {
    return (
            <div className={styles.cesinhaContainer}>
                <div className={styles.icon}></div>
                <div className={styles.messageBox}>
                    <div className={styles.messagePopup}>
                        <p className={styles.messageText}>Qualquer coisa fala comigo, ok?</p>
                        <p className={styles.messageTime}>10:00</p>
                    </div>
                </div>
            </div>
    )
}