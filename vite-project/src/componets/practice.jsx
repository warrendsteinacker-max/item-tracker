import React, {useContext} from "react";
import { DataContext } from "../context";

export const PC = ({Dd}) => {

    return(
        <div>
        <div style={{backgroundColor: 'red', width: '10px', height: '50px'}} >iiiiiiiiii</div>
        {Dd.map((item, index) => (
        
            <div key={index} id="pr">
                <p id="prac">{item.name}</p>
                <p id="prac">{item.age}</p>
            </div>
        ))}
        </div>
    );
}