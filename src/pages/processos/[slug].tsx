import { useRouter } from "next/router";

export default function processoAberto(){
    
    const router = useRouter();
    return(
        <h1>{router.query.slug}</h1>
    )
}