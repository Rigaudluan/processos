import { GetStaticProps, GetStaticPaths } from "next";
import { SearchInput } from "../components/SearchInput";
import { TitleProcess } from "../components/TitleProcess/titleProcess";
import { api } from "../services/api";

type Processo = {
    id: string,
    title: string,
    area: string,
    latest_modification: string,
    thumbnail: string,
    description: string
  }
  

export default function paginadeprocessos(){
    return(
        <main>
            <TitleProcess name='Processos'/>
            <SearchInput />

        </main>
    )
}