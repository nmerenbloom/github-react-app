import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
import './DataFetch.css'


const initialState = {
    loading: false,
    error: '',
    posts: [],
    numLoaded: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                posts: state.posts.concat(action.payload),
                numLoaded: state.numLoaded + 5
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'Oops...Something Went Wrong: ' + action.payload + ' Error',
                posts: []
            }
        case 'CLEAR':
            return initialState
        default:
            return state
    }
}


function DataFetch() {


    const handleClearClick = () => {
        dispatch({type: 'CLEAR'})
    }

    const handleLoadClick = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data.slice(state.numLoaded, state.numLoaded + 5) })
                // console.log(res.data)
                // console.log(state.numLoaded)
            })
            .catch((error) => {
                dispatch({ type: 'FETCH_ERROR', payload: error.response.status })
            })
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then((res) => {
    //         dispatch({type: 'FETCH_SUCCESS', payload: res.data.slice(0,state.numLoaded)})
    //         console.log(res.data)
    //         console.log(state.numLoaded)
    //     })
    //     .catch((error) => {
    //         dispatch({type: 'FETCH_ERROR'})
    //     })
    // },[])

    return (
        <div className='container'>
            <div className='sticky-top m-3 d-flex justify-content-between'>
                <button onClick={handleClearClick} className='m-3 btn btn-danger' type='button'>Clear</button>
                <button onClick={handleLoadClick} className='m-3 btn btn-outline-primary'  type='button'>Load More Results</button>
            </div>
            <h1 className='m-3 title'>Posts</h1>

            <ul className='list-group list-group-flush'>
                {state.loading ? 'Loading' : state.posts.map(p => <li className='list-group-item' key={p.id}>{p.title}</li>)}
            </ul>

            {state.posts.length == 0 ? <h4>No Posts Rendered</h4> : null }

            {state.error ?
                <div className="m-3 alert alert-warning" role="alert">
                    {state.error}
                </div> :
                null
            }
        </div>
    )


}

export default DataFetch
