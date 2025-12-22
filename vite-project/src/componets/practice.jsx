import React, {useContext} from "react";
import { DataContext } from "../context";

export const PC = ({Dd}) => {

    return(
        <div>
        <div style={{backgroundColor: 'red', width: '150px', height: '150px'}} ></div>
        {Dd.map((item, index) => (
        
            <div key={index} id="pr">
                <p id="prac">{item.name}</p>
                <p id="prac">{item.age}</p>
            </div>
        ))}
        </div>
    );
}