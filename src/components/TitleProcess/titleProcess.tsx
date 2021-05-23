import styles from './styles.module.scss'
import React from "react";

export function TitleProcess(props){
    return(
        <h1 className={styles.title} >{props.name}</h1>
    )
}