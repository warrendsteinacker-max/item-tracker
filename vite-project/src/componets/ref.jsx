import { forwardRef, useReducer, useMemo, useCallback, memo } from "react";

const refC = memo(forwardRef((props, ref) => {
    return(
        <div>
            <></>
        </div>
    )
}))