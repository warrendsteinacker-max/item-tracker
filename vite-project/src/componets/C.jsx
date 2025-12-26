import React from "react";

class CC extends React.PureComponent { 
    render() {
        return(
            <div>
                <h3>{this.props.count}</h3>
                <button onClick={()=>this.props.inc()}></button>
                <button onClick={()=>this.props.dec()}></button>
            </div> )
            
        }
}

///
export class C extends React.Component {
    
/// may not need to define constructer
///fixed it
    state = {
        count: 0
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
            <CC count={this.state.count} inc={this.inc} dec={this.dec}/>
            </>
        )
    }
} 
//                <div>number of {data.item} is {count}</div>
                //<div>price is {priceofc}$</div>