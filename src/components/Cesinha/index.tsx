import React from 'react';
import styles from './styles.module.scss';
import { BlipChat } from "blip-chat-widget";

new BlipChat()
    .withAppKey('Y2VzaW5oYTE6M2U1ODQxNmQtZTE5ZS00NzkyLTk3OTUtMmM2NDU0YjQ1ZGU0')
    .withButton({ color: "#F7580B", "icon": "" })
    .withCustomCommonUrl('https://chat.blip.ai/')
    .build();

export function Cesinha() {
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