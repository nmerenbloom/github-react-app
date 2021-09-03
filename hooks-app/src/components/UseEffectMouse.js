import React, { useState, useEffect } from 'react'


function UseEffectMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('UseEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Removing Mouse Listener')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default UseEffectMouse
