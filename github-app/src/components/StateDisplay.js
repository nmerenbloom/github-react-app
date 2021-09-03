import React from 'react'

function StateDisplay(props) {

    const typer = (input) => {
        if (typeof(input) === 'string' && input.length === 0) {return "''"}
        if (typeof(input) === 'object'){
            if(Array.isArray(input)) {
                return typeof(input[0]) + ' Array, length ' + input.length
            }
            return 'Object'
        } else {
            return String(input)
        }
    }

    return (
        <div className=' d-flex flex-column'>
            <div className='w-75 align-self-center'>
            {Object.entries(props.stateObj).map(([key, value]) => 
                <p key={key}><b>{key}: </b>{typer(value)}</p>)
            }
        </div>
        </div>
        
    )
}

export default StateDisplay
