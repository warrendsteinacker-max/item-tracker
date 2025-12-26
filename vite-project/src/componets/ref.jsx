import { forwardRef, useReducer, useMemo, useCallback, memo } from "react";



const refC = memo(forwardRef((props, ref) => {
 
    return(
        <div>
            <></>
        </div>
    )
}))

export const Ref = () => {

    const II = {count: AA, item: 'apple', priceofc: 5}

    const AA = useCallback(() => {for(let i=0; i<1000000000; i++){if(i===1000000000){return i;}}} , [II.count]);

    const [state, dispatch] = useReducer(reducer, II);
        reducer = (state, action) => {
            switch(action.type){
                case 'inc':
                    return {...state, count: state.count + 1};
                case 'dec':
                    return {...state, count: state.count -1};
                case
            
            <refC />
    )
}