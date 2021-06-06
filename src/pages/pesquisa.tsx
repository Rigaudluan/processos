import { api } from "../services/api"

export default function pesquisa() {
    const route = useRoute<RouteProp<UserParamList,"Pesquisa">>();
    
    
    return(
        <div>
            
        </div>
    )
}

export default function Home(){
    

constdefaultPosts:IPost[]=[];const[posts,setPosts]=useState<IPost[]>(defaultPosts);


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
}