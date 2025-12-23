import React from "react";
import React, {useState} from "react";


export class C extends React.Component {
    

    render(){

        const {data} = this.props
        const [count, setCount] = useState(data.count)
        const price = 1
        const priceofc = count*price

        const inc = () => {
            setCount((count) => count + 1)
        }

        const dec = () => {
            setCount((count) => count - 1)
        }

        return(
            <>
            <div>
                <div>number of {data.item} is {count}</div>
                <div>price is {priceofc}$</div>
                <button onClick={()=>inc()}></button>
                <button onClick={()=>dec()}></button>
            </div>
            </>
        )
    }
} 