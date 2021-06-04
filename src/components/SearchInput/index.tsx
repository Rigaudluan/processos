import React, { useState } from 'react';
import Formik, { useFormik } from 'formik';
import styles from './styles.module.scss';
import { api } from '../../services/api';


export function SearchInput() {
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
      console.log(formik.values);
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
      </div>
    </form>
    <p></p>
    </div>
  );
}


async function onSearchProcesses(props){

  let results = props
  console.log()
  const {data} = await api.get(`pesquisa/${results}`)

const processes = data.files.map(processes => {
      return{
          id: processes.id,
          name: processes.name,
          iconLink: processes.iconLink
      }
    }
  )
}