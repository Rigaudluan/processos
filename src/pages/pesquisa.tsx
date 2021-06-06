import { api } from "../services/api"

export default function SearchPage(processes) {
    return(
        <div>
            
        </div>
    )
}

export async function onSearchProcesses(props) {

    let results = props
    const { data } = await api.get(`pesquisa/${results}`)
    console.log(data.files)

        const processes = data.files.map(processes => {
            return {
                id: processes.id,
                name: processes.name,
                iconLink: processes.iconLink
            }
        }
    )
}