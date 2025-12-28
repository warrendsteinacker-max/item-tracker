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
    let jj = [];
    let kk = [];
    let ll = [];
    let mm = [];
    let nn = [];
    let oo = [];
    let pp = [];
    let qq = [];
    let rr = [];

    for(let i = 0; i < 1000000000; i++) {
        ii[i] = i + 0;
    }

    for(let j = 0; j < 1000000000; j++) {
        jj[j] = j + 1;
    }

    for(let k = 0; k < 1000000000; k++) {
        kk[k] = k + 2;
    }

    for(let l = 0; l < 1000000000; l++) {
        ll[l] = l + 3;
    }

    for(let m = 0; m < 1000000000; m++) {
        mm[m] = m + 4;
    }

    for(let n = 0; n < 1000000000; n++) {
        nn[n] = n + 5;
    }

    for(let o = 0; o < 1000000000; o++) {
        oo[o] = o + 6;
    }  

    for(let p = 0; p < 1000000000; p++) {
        pp[p] = p + 7;
    }

    for(let q = 0; q < 1000000000; q++) {
        qq[q] = q + 8;
    }

    for(let r = 0; r < 1000000000; r++) {
        rr[r] = r + 9;
    }
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