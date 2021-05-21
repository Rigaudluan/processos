import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { api } from "../../services/api";

export default function processoAberto(){
    
    const router = useRouter();
    return(
        <h1>{router.query.slug}</h1>
    )

}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params;
    const {data} = await api.get(`/processos/${slug}`)

    return {
      props: {

      },
      revalidate: 60 * 10
    }
  }
  