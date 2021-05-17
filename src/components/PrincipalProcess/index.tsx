export default function PrincipalProcess(props){
    return(
        <div>
            <p>{JSON.stringify(props.processes)}</p>
        </div>
    )
}
export async function getServerSideProps(){
    const response = await fetch('http://localhost:3333/processes')
    const data = await response.json()
  
    return{
        props:{
            processes: data,
        }
    }
  }