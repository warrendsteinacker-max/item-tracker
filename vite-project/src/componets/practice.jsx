import React, {useContext} from "react";
import { DataContext } from "../context";

export const PC = ({Dd}) => {

    return(
        Dd.map((item) => (
        
            <>
            <div id="pr">
                <p id="prac">{item.name}</p>
                <p id="prac">{item.age}</p>
            </div>
            </>
        ))
    )
}