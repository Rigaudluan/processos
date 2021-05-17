import { GetStaticProps } from 'next'

import { api } from '../services/api'

export default function Processos(props){
    return(
        <div>
            <p> {JSON.stringify(props.processes)}</p>
        </div>
    )
}
const getStaticProps: GetStaticProps = async() => {
    const { data } = await api.get('processes', {
      params:{
      _limit: 12,
      _sort: 'id',
      _order: 'desc'
      }
  
    })
  
    return{
      props: {
        processes: data,
      },
      revalidate: 60 * 10
    }
  }