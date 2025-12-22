import { useParams } from "react-router-dom"


export const Box = () => {

    const {id} = useParams();
    
    return(<p>Hello person of id {id}</p>)
}