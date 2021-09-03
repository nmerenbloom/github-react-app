import React, {useState} from 'react'

function HookCounterThree() {

    const [name, setName] = useState({firstName: '', lastName: ''})

    return (
        <form>
            <input onChange={event => setName({...name, firstName: event.target.value})} value={name.firstName} type='text'/>
            <input onChange={event => setName({...name, lastName: event.target.value})} value={name.lastName} type='text'/>
            <h2>Your first name is {name.firstName}</h2>
            <h2>Your last name is {name.lastName}</h2>
            {/* <h2>{JSON.stringify(name)}</h2> */}
        </form>
    )
}

export default HookCounterThree
