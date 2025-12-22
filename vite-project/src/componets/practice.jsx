import React, {useContext} from "react";
import { DataContext } from "../context";
import { Box } from "./box";
import { Link } from "react-router-dom";

export const PC = ({Dd}) => {

    return(
        <div>
        <box/>
        <div style={{backgroundColor: 'red', width: '150px', height: '150px', marginLeft: '100px', marginTop: '300px'}} ></div>
        {Dd.map((item, index) => (
        
            <div key={index} id="pr">
                <p id="prac">{item.name}</p>
                <p id="prac">{item.age}</p>
                <Link to={`/pp/${item.id}`} id="link">got to id</Link>
            </div>
        ))}
        </div>
    );
}