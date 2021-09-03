import React, { useState } from 'react'



function HookCounterTwo() {

    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    return (
        <div>
            Count : {count}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={() => setCount(prevCount => prevCount + 5)}>Add 5</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
        </div>
    )
}

export default HookCounterTwo
