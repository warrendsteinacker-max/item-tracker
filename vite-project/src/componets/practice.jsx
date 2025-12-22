import React, {useContext} from "react";
import { DataContext } from "../context";

export const PC = ({Dd}) => {

    return(
        Dd.map((item) => (
        
            <>
            <div>
                <p>{item.name}</p>
                <p>{item.age}</p>
            </div>
            </>
        ))
    )
}