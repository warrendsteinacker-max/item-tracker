import React, {useContext} from "react";
import { DataContext } from "../context";

export const PC = ({Dd}) => {

    return(
        Dd.map((item) => (
        
            <>
            <div className="pr">
                <p className="prac">{item.name}</p>
                <p className="prac">{item.age}</p>
            </div>
            </>
        ))
    )
}