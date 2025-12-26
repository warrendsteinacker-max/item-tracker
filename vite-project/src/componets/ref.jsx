import { forwardRef, useReducer, useMemo, useCallback, memo } from "react";



const refC = memo(forwardRef((props, ref) => {

const [state, dispatch] = useReducer(reducer, initialState); 



    return(
        <div>
            <></>
        </div>
    )
}))

export const Ref = () => {


    
    return(
        <refC />
    )
}