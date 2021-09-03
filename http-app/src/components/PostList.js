import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMessage: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( (response) => {
                console.log(response)
                this.setState({posts: response.data})
            })
            .catch( (error) => {
                console.log(error)
                this.setState({
                    errorMessage: 'Error Retrieving Data: ' + error.response.status
                })
            })
    }
    
    render() {
        const {posts, errorMessage} = this.state

        return (
            <div>
                Post List
                <hr/>
                <div>
                    {
                    posts.length ?
                    posts.map(p => <div key={p.id}>{p.title}</div>) :
                    null
                    }
                    {errorMessage ? <h2>{this.state.errorMessage}</h2> : null}
                </div>
                
            </div>
        )
    }
}

export default PostList
