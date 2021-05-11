import styles from './styles.module.scss'
import React from "react";
import ReactDOM from "react-dom";

const processes = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin"
  ];

export function SearchInput(){
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
       setSearchTerm(event.target.value);
     };
    React.useEffect(() => {
       const results = processes.filter(process =>
         process.toLowerCase().includes(searchTerm)
       );
       setSearchResults(results);
     }, [searchTerm]);
    return(
       <main>
            <div className={styles.siContainer}>
                <h1 className={styles.siTitle} >Olá, <span>usuário</span>!</h1>
                <input
                type="text"
                placeholder="Reembolso"
                value={searchTerm}
                onChange={handleChange}
                className={styles.siInput}
                />
                <button onClick={handleChange}>
             
                    <img src="/search.svg" alt="buscar" />
                </button>
                <ul>
                {searchResults.map(item => (
                <li >{item}</li>
                ))}
                </ul>
            </div>
       </main>
    );
}