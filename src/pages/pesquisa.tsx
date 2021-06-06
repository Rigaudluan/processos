import { api } from "../services/api"

export default function SearchPage(processes) {
    return(
        <div>
            
        </div>
    )
}

export async function onSearchProcesses(props) {

    let results = props
    console.log()
    const { data } = await api.get(`pesquisa/${results}`)

    const processes = data.files.map(processes => {
        return {
            id: processes.id,
            name: processes.name,
            iconLink: processes.iconLink
        }
    }
    )
}