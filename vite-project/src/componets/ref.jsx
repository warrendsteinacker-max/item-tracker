import { forwardRef, useReducer, useMemo, useCallback, memo, useRef } from "react";



const refC = memo(forwardRef((props, ref) => {
 
    return(
        <div>
            <h4>item is {props.item}</h4>
            <h4>count is {props.count}</h4>
            <button onClick={props.inc}>+</button>
            <button onClick={props.dec}>-</button>
            <button onClick={props.reset}>reset</button>
            <input type="text" placeholder={props.item} ref={ref} />
            <input type="text" placeholder="input item" onChange={props.placeHchange}/>
        </div>
    )
}));

export const Ref = () => {

    const reff = useRef();

    placeHchange = (e) => {
        reff.current.placeholder = e.target.value;
    }

    const AA = useCallback(() => {for(let i=0; i<1000000000; i++){if(i===1000000000){return i;}}} , [II.count]);

    const AAA = useMemo(() => AA(), [AA]);

    const II = {count: AAA, item: 'apple', priceofc: 5}

    const [state, dispatch] = useReducer(reducer, II);
        reducer = (state, action) => {
            switch(action.type){
                case 'inc':
                    return {...state, count: state.count + 1};
                case 'dec':
                    return {...state, count: state.count -1};
                case 'reset':
                    return {...state, count: 0};
                default:
                    return state;
            }
            
            return(
                <refC ref={reff} inc={() => dispatch({type: 'inc'})} dec={() => dispatch({type: 'dec'})} reset={() => dispatch({type: 'reset'}), II={II}} />
            )

}}