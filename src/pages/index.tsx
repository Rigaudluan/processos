import next, { GetStaticProps } from "next";
import React, { Props } from "react";
import styles from './home.module.scss';
import Image from 'next/image';
import Link from "next/link";

import { api } from "../services/api";
import { SearchInput } from "../components/SearchInput";
import { TitleProcess } from "../components/TitleProcess/titleProcess";


export default function Home(){

  return (
    <main>
      <link rel="shortcut icon" href="/favicon.ico" />
      <TitleProcess name='Página Principal' />
      <SearchInput />
    </main>
  )
}


