import React from "react";

///
export class C extends React.Component {
    
/// may not need to define constructer

    constructor(props){
        super(props);
        this.state = 0; // initial count from props
    }

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
                <h3>{this.state}</h3>
                <button onClick={()=>this.inc()}></button>
                <button onClick={()=>this.dec()}></button>
            </div>
            </>
        )
    }
} 
//                <div>number of {data.item} is {count}</div>
                //<div>price is {priceofc}$</div>