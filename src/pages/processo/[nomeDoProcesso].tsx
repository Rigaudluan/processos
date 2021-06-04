import {useRouter} from 'next/router'

export default function Process(){

  const router = useRouter();

  return(
      <p>{router.query.nomeDoProcesso}</p>
  )
}