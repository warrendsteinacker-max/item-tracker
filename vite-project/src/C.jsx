import React from "react";
import React, {useState} from "react";


export class C extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.data.count;
    };

    inc = () => {
        this.setState(() => )
    }

    dec = () => {

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