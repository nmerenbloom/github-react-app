import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: 'react'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(this.state.username + ' knows ' + this.state.topic + ' and says: "' + this.state.comments + '"')
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input onChange={this.handleUsernameChange} type='text' value={this.state.username}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea onChange={this.handleCommentsChange} value={this.state.comments}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select onChange={this.handleTopicChange} value={this.state.topic}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form
