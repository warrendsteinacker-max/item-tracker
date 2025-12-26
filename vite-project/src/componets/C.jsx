import React from "react";

///
export class C extends React.Component {
    
/// may not need to define constructer
///fixed it
    state = {
        count: this.props.data.
    }

    inc = () => {
        this.setState(() => ({ count: this.state.count + 1 }))
    }

    dec = () => {
        this.setState(() => ({ count: this.state.count - 1 }))
    }

    render(){



        return(
            <>
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={()=>this.inc()}></button>
                <button onClick={()=>this.dec()}></button>
            </div>
            </>
        )
    }
} 
//                <div>number of {data.item} is {count}</div>
                //<div>price is {priceofc}$</div>