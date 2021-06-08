import React, { useState } from 'react';
import Formik, { useFormik } from 'formik';
import styles from './styles.module.scss';
import { api } from '../../services/api';
import Link from 'next/link';


type processes = {
  id: string,
  name: string,
  iconLink: string,
  webViewLink: string
  
}
export function SearchInput() {

  var SearchState = true
  var SearchValid = true
  
  const [imageProcess, setImage] = useState(null)
  const [id, setId] = useState(null)
  const [name, setName] = useState(null)

  async function onSearchProcesses(props) {
    let results = props
   try{
    const { data } = await api.get(`pesquisa/${results}`)

    const processes : processes = data
    setName(processes.name)
    setId(processes.id)
    setImage(processes.iconLink)

    return {
      processes: processes
    }
  }catch{
    alert('Não achamos o que você procurava')
    SearchValid = false
  }
}

  function useFormik({
    initialValues,
  }) {
    const [values, setValues] = useState(initialValues);

    function handleChange(event) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;
      setValues({
        ...values,
        [fieldName]: value,
      });
    }

    return {
      values,
      handleChange,
    };
  }
  const formik = useFormik({
    initialValues: {
      userText: '',

    },
  });
  if(formik.values.userText != ''){
    SearchState = false
  }

  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        onSearchProcesses(formik.values.userText)
      }}
      >

        <div className={styles.siContainer}>
          <input
            className={styles.siInput}
            type="text"
            placeholder="Ex. : Reembolso"
            name="userText"
            id="pesquisa"
            onChange={formik.handleChange}
            value={formik.values.userText}
          />
          <button type="submit">
            pesquisar
        </button>
        <div className={styles.result}>
          <section>
            <img className={SearchState ? styles.active : styles.desable} src="/notSearchedYet.png" alt="" />
            <img className={!SearchValid ? styles.active : styles.desable} src="/notFound.png" alt="" />
            </section>

            <div className={!SearchState ? styles.active : styles.desable} >
                  <img src={imageProcess} alt=""/>
                <Link href={`processo/${id}`}>        
                  <a>{name}</a>         
                </Link>
            </div>
            
          </div>
        </div>
      </form>
    </div>
  );
}
