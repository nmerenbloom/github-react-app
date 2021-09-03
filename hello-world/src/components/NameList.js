import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Noah', 'Jeff', 'Bruce']
    // const jsxNamesList = names.map(n => <h2>{n}</h2>)

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Noah',
            age: 22,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Jeff',
            age: 66,
            skill: 'Vue'
        },
    ]

    // const jsxPersonList = persons.map(person => <Person key={person.id} person={person}></Person> )
    const nameList = names.map((n, index) => <h2 key={index}>{n}</h2>)
    // return <div>{jsxNamesList}</div>
    // return <div>{jsxPersonList}</div>
    return <div>{nameList}</div>
}
export default NameList
