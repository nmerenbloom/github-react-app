import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        alert('Click Logged!')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me (Class)</button>
            </div>
        )
    }
}

export default ClassClick
