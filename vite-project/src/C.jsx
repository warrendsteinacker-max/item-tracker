import React from "react";
import React, {useState} from "react";

///
export class C extends React.Component {
    constructor(props) {
        super(props);
        this.state = 0;
    };
/// may not need to define constructer

    inc = () => {
        this.setState(() => this.state + 1)
    }

    dec = () => {
        this.setState(() => this.state - 1)
    }

    render(){

        const {data} = this.props
        const [count, setCount] = useState(data.count)
        const price = 1
        const priceofc = count*price


        return(
            <>
            <div>
                <div>number of {data.item} is {count}</div>
                <div>price is {priceofc}$</div>
                <button onClick={()=>inc()}></button>
                <button onClick={this.dec()}></button>
            </div>
            </>
        )
    }
} 