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
  
  const [imageProcess, setImage] = useState(null)
  const [id, setId] = useState(null)
  const [name, setName] = useState(null)

  async function onSearchProcesses(props) {
    let results = props
    const { data } = await api.get(`pesquisa/${results}`)
    let resultado = { id: "10RzPg3BurxA1FwpKnQ_JTrO5tZPoe6iF", name: "Cesar School", mimeType: "application/vnd.google-apps.folder", webViewLink: "https://drive.google.com/drive/folders/10RzPg3BurxA1FwpKnQ_JTrO5tZPoe6iF", iconLink: "https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.google-apps.folder+shared" }

    const processes : processes = data
    setName(processes.name)
    setId(processes.id)
    setImage(processes.iconLink)

    return {
      processes: processes
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
          <section><img className={SearchState ? styles.active : styles.desable} src="/notSearchedYet.png" alt="" /></section>
        <img src={imageProcess} alt=""/>
          <Link href={`processo/${id}`}>        
          <a>{name}</a>         
          </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
{/* <img src={imageProcess} alt="pasta"/> */}
