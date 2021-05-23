import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { api } from "../../services/api"

type Processo = {
  id: string,
  title: string,
  area: string,
  latest_modification: string,
  thumbnail: string,
  description: string
};

type processoProps ={
  processo: Processo;
}


export default function processoAberto(){
    
    const router = useRouter();
    return(
       <div>
         
       </div>
    )

}

export const getStaticPaths: GetStaticPaths = async () => {
  return{
    paths: [],
    fallback: 'blocking'
  }

  }

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const {data} = await api.get(`/processos/${slug}`)

  const processo = {
      id: data.id,
      title: data.title,
      area: data.area,
      latest_modification: data.latest_modification,
      thumbnail: data.thumbnail,
      description: data.description
    };

  return {
    props: {
      processo,
    },
    revalidate: 60 * 10
  }
}
