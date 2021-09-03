import React, {useState, useEffect} from 'react'

function UseEffectCounter1() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect- Updating document Title')
        document.title = `You clicked ${count} times`
    }, [count])

    const handleClick = () => {
        setCount(count +1)
    }
    const handleType = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <input onChange={handleType} value={name} type='text'/>
            <button onClick={handleClick}>Clicked {count} times</button>
            {/* <h1>{count}</h1>
            <h2>{name}</h2> */}
        </div>
    )
}

export default UseEffectCounter1
