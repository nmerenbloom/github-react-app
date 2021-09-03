import React, {useReducer} from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function Counter3() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count = {count}</div>
            <button onClick={()=>dispatch('increment')}>Add 1</button>
            <button onClick={()=>dispatch('decrement')}>Subtract 1</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
            <hr/>
            <div>Count = {count2}</div>
            <button onClick={()=>dispatch2('increment')}>Add 1</button>
            <button onClick={()=>dispatch2('decrement')}>Subtract 1</button>
            <button onClick={()=>dispatch2('reset')}>Reset</button>
        </div>
    )
}

export default Counter3
