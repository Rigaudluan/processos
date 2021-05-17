import styles from './styles.module.scss'
import React from "react";
import ReactDOM from "react-dom";
import { GetStaticProps } from 'next';
import { api } from '../../services/api';

export function SearchInput(){
    const [searchTerm, setSearchTerm] = React.useState("");
    return(
       <main>
            <div className={styles.siContainer}>
                <input
                type="text"
                placeholder="Reembolso"
                className={styles.siInput}
                />
                <button>
                    <img src="/search.svg" alt="buscar" />
                </button>
            </div>
       </main>
    );


}
