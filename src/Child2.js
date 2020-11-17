import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const Child2 = () => {

    let [state, dispatch] = useReducer(CounterReducer, 0);

    console.log(state)
    return (
        <div>
            <h2>This is Secuond child Using Counter Reducer </h2>
            <h3>This is secound child Reducing counter: {state}</h3>
            <button onClick={() => dispatch('INCREMENT')}>
                Increment Counter Reducer
            </button>
        </div>
    )
}

export default Child2;