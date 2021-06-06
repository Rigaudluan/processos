import React, { useState } from 'react';
import Formik, { useFormik } from 'formik';
import styles from './styles.module.scss';
import { api } from '../../services/api';
import Link from 'next/link';


export function SearchInput(processes) {
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

        <p></p>
      </div>
    </form>
    </div>
  );
}

async function onSearchProcesses(props){
  let results = props
  const {data} = await api.get(`pesquisa/${results}`)
  console.log(data.files)

const processes = data.files.map(processes => {
      return{
          id: processes.id,
          name: processes.name,
          iconLink: processes.iconLink
      }
    }
  )
  return{
    processes: processes
  }
}