import { forwardRef, useReducer, useMemo, useCallback, memo, useRef } from "react";

// 1. Move reducer outside and define properly
const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return { ...state, count: state.count + 1 };
        case 'dec':
            return { ...state, count: state.count - 1 };
        case 'reset':
            return { ...state, count: 0 };
        default:
            return state;
    }
};

// 2. Component name must be Uppercase
const RefC = memo(forwardRef((props, ref) => {
    return (
        <div>
            <h4>item is {props.item}</h4>
            <h4>count is {props.count}</h4>
            <button onClick={props.inc}>+</button>
            <button onClick={props.dec}>-</button>
            <button onClick={props.reset}>reset</button>
            <br />
            <input type="text" placeholder={props.item} ref={ref} />
            <input type="text" placeholder="input item" onChange={props.placeHchange} />
        </div>
    );
}));

export const Ref = () => {
    const reff = useRef();

    // 3. Initial state object
    const initialState = { count: 0, item: 'apple', priceofc: 5 };
    const [state, dispatch] = useReducer(reducer, initialState);

    // 4. Declare function with const
    const handlePlaceHchange = (e) => {
        if (reff.current) {
            reff.current.placeholder = e.target.value;
        }
    };

    // 5. Optimization (Note: a loop of 1 billion will freeze the browser for a moment)
    const expensiveValue = useMemo(() => {
        let result = 0;
        for (let i = 0; i < 1000000; i++) { // Reduced for performance
            if (i === 999999) result = i;
        }
        return result;
    }, []); 

    return (
        <RefC 
            ref={reff} 
            item={state.item}
            count={state.count}
            inc={() => dispatch({ type: 'inc' })} 
            dec={() => dispatch({ type: 'dec' })} 
            reset={() => dispatch({ type: 'reset' })} 
            placeHchange={handlePlaceHchange}
        />
    );
};