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


/////adding more notes
const evenNumbersinRange = useMemo(() => {
    for (let i = startingp; i <= endingP; i++) {
        if (i % 2 === 0) {
            return i;
        }
    }
}, [startingp, endingP]);

const percentOfEvenNumbersInRange = useCallback(() => {
    return evenNumbersinRange / totalNumbers * 100;
}, [evenNumbersinRange, totalNumbers]);


const st = (index) => {
    let a = [];
    for (let i = 0; i < 1000000000; i++) {
        a[i] = i*i
    }
    return a[index];
}



const stt = () => {
    let b = [];
    for (let i = 0; i < 1000000000; i++) {
        b[i] = i*i
    }
    return function(index) {
        return b[index];
    }
}

const c = stt();

console.time();
console.log(c(99999999));
console.timeEnd();
console.time();
console.log(st(99999999));
console.timeEnd();



const ff = () => {
    let v = [];

    function add(a, b) {
        v.push(a + b);
    }

    function sub(a, b) {
        v.push(a - b);
    }

    function mul(a, b) {
        v.push(a * b);
    }

    function getcalc() {
        for(let i = 0; i < v.length; i++) {
            console.log(v[i] + v[v.length - 1 - i]);
        }
    }

    return { add, sub, mul, getcalc };

}



const addf = () => {

    let ii = [];
    let iii = [];


    for(let i = 0; i < 1000000000; i++) {
        ii[i] = i + 0;
    }

    for(let i = 0; i < 1000000000; i++) {
        ii[i + 1] = i + 1;
    }

    for(let i = 0; i < 1000000000; i++) {
        ii[i + 2] = i + 2;
    }

    for(let i = 0; i < 1000000000; i++) {
        ii[i + 3] = i + 3;
    }

    for(let i = 0; i < 1000000000; i++) {
        ii[i + 4] = i + 4;
    }

    for(let i = 0; i < 1000000000; i++) {
        ii[i + 5] = i + 5;
    }

    for(let i = 0; i < 1000000000; i++) {
        ii[i + 6] = i + 6;
    }

    for(let i = 0; i < 1000000000; i++) {
        ii[i + 7] = i + 7;
    }

    for(let i = 0; i < 1000000000; i++) {
        ii[i + 8] = i + 8;
    }

    for(let i = 0; i < 1000000000; i++) {
        ii[i + 9] = i + 9;
    }


    function addd(a, b) {
       iii.push(ii[a] + ii[b]);
    }

    function getcalc() {
    for(let i = 0; i < iii.length; i++) {
    console.log(iii[i] + iii[iii.length - 1 - i]);
        }
    } 
    return { addd, getcalc };
}



const memoizer = (fn) => {
    let cache = {};

    return function(...args) {}

}


const encap = () => {

    const ff = () => {
    let v = [];

    function div(a, b) {
        v.push(a / b);
    }

    function add(a, b) {
        v.push(a + b);
    }

    function sub(a, b) {
        v.push(a - b);
    }

    function mul(a, b) {
        v.push(a * b);
    }

    function getcalc() {
        for(let i = 0; i < v.length; i++) {
            console.log(v[i] + v[v.length - 1 - i]);
        }
    }

    return { add, sub, mul, getcalc };

}

return ff();

}