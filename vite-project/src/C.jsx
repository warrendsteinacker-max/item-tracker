import React from "react";
import React, {useState} from "react";

///
export class C extends React.Component {
    
/// may not need to define constructer

    inc = () => {
        this.setState(() => this.state + 1)
    }

    dec = () => {
        this.setState(() => this.state - 1)
    }

    render(){



        return(
            <>
            <div>
                <div>number of {data.item} is {count}</div>
                <div>price is {priceofc}$</div>
                <button onClick={()=>this.inc()}></button>
                <button onClick={()=>this.dec()}></button>
            </div>
            </>
        )
    }
} 