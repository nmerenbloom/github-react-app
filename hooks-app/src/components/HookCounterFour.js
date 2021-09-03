import React, {useState} from 'react'

function HookCounterFour() {

    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    const clearItems = () => {
        setItems([])
    }

    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <button onClick={clearItems}>Clear</button>
            <ul>
                {
                    items.map(i => <li>{i.value}</li>)
                }
            </ul>
            
        </div>
    )
}

export default HookCounterFour
