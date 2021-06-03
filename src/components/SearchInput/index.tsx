import React, { useState } from 'react';
import Formik, { useFormik } from 'formik';
import styles from './styles.module.scss';

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
    <form onSubmit={(event) => {
      event.preventDefault();
      console.log(formik.values);
      alert('Olha o console!');
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
        {/* <span class="formField__error">This field is required</span> */}
      </div>

    </form>
  );

}