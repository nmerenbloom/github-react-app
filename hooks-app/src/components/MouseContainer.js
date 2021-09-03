import React, {useState} from 'react'
import UseEffectMouse from './UseEffectMouse'


function MouseContainer() {

    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle display</button>
            {display && <UseEffectMouse></UseEffectMouse>}
        </div>
    )
}

export default MouseContainer
