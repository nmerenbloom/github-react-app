import React, { useReducer } from 'react'
import Card from './Card'
import './styles.css'
import githubLogo from './githubLogo.png'
import Spinner from './Spinner'
import StateDisplay from './StateDisplay'

const initialState = {
    username: '',
    inputTouched: false,
    loading: false,
    error: '',
    posts: [],
    numLoaded: 0,
    recents: [],
    currentSearch: '',
    showState: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'HANDLE_TEXT_INPUT':
            return {
                ...state,
                inputTouched: true,
                username: action.payload
            }
        case 'BEGIN_FETCH':
            return {
                ...state,
                currentSearch: action.payload,
                loading: true
            }
        case 'FETCH_SUCCESS':
            let recentsArr
            if (state.recents.includes(state.username)) {
                recentsArr = [...state.recents]
            } else {
                recentsArr = [...state.recents, state.username]
            }
            let postsArr = action.payload.sort(function(a, b) {
                return new Date(b.created_at) - new Date(a.created_at)
            })
            return {
                ...state,
                inputTouched: false,
                username: '',
                recents: recentsArr,
                loading: false,
                error: '',
                posts: postsArr,
                numLoaded: 5
            }
        case 'FETCH_ERROR':
            return {
                ...initialState,
                error: `${action.payload}...User "${state.currentSearch}" likely does not exist`,
                recents: state.recents
            }
        case 'RENDER_MORE':
            return {
                ...state,
                numLoaded: state.numLoaded + 5
            }
        case 'LIVE_STATE':
            return {
                ...state,
                showState: !state.showState
            }
        case 'CLEAR':
            return initialState
        default:
            return state
    }
}


function Search() {

    const [state, dispatch] = useReducer(reducer, initialState)
    
    let validInput = (state.inputTouched && state.username)
    let invalidInput = (state.inputTouched && !state.username)

    let inputValidityStyle = {borderLeft: invalidInput ? '3px solid red' :
                            validInput ? '3px solid green' : '1px solid #ced4da'}

    const handleTextInput = (e) => {
        dispatch({ type: 'HANDLE_TEXT_INPUT', payload: e.target.value })
    }

    const handleSubmit = (event) => {
        let recent = event.target.textContent
        dispatch({ type: 'BEGIN_FETCH', payload: state.username ? state.username : recent })
        
        fetch(`https://api.github.com/users/${state.username ? state.username : recent}/repos?per_page=100`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(res.status);
                }
            })
            .then(data => {
                dispatch({ type: 'FETCH_SUCCESS', payload: data })
                console.log(data)
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR', payload: error })
            })
    }


    return (
        <div className=' mt-2'>
            <div className='border-bottom'>
                <h1>GitHub Users Public API Demo</h1>
            </div>
            <div id='m' className='p-4 d-flex justify-content-around mt-2'>

                <div className='d-flex flex-column'>
                    <div className='sticky-top mt-2'>
                            <strong>Search</strong>
                            <div className="d-flex mb-0 btn-group">
                                <input
                                    value={state.username}
                                    onChange={(e) => handleTextInput(e)}
                                    type="text"
                                    className="form-control"
                                    placeholder="Github username"
                                    onClick={(e)=>handleTextInput(e)} 
                                    style={inputValidityStyle}/>
                                <div className="">
                                    <button onClick={handleSubmit} disabled={!state.username} className="btn btn-outline-primary w-100" type="button">Search</button>
                                </div>
                                
                            </div>
                            {invalidInput?<p className='text-danger'>Invalid: Must have username</p>:null}
                        {/* Recents List */}
                        <ul className='mt-3 container border'>
                            <h4><u>Recents</u></h4>
                            {state.recents.length > 0 ? state.recents.map(s => <p className='linkify' onClick={handleSubmit} key={s}>{s}</p>) : <p>No Search History</p>}
                        </ul>
                        <button onClick={() => dispatch({ type: 'CLEAR' })} type='button' className='btn btn-danger'>Clear All Searches</button>
                        <hr/>
                        {/* Live State Component */}
                        <p onClick={()=>dispatch({type:'LIVE_STATE'})} className='linkify'>{!state.showState ? 'Show':'Hide'} Live State</p>
                        {state.showState?<StateDisplay stateObj={state}></StateDisplay>:null}
                    </div>
                </div>

                <div className='d-flex flex-column w-75 mt-3'>

                    {/* Results title - count/profile */}
                    <div className='text-center'><h3><u>Results:</u> {state.posts.length} Repos Available</h3></div>
                    { state.numLoaded > 0 ? 
                            <p>Profile: <a href={`https://github.com/${state.currentSearch}`} target='_blank' rel='noreferrer'>"{state.currentSearch}"</a></p>
                            : null}
                    
                    {/* Conditional Spinner/Error */}
                    {state.loading ? <Spinner></Spinner> : null}
                    {state.error ? <div className="alert alert-warning w-75 align-self-center" role="alert">{state.error}</div> : null}
                    
                    {/* Card List */}
                    <div className='mx-2 p-2 d-flex flex-column align-self-center'>
                        {!state.loading && state.posts.length > 0 ? state.posts.slice(0, state.numLoaded).map(postObj => <Card key={postObj.id} postObj={postObj}></Card>) : 
                        !state.error && !state.loading && state.recents.length > 0 ? <p className='font-italic'>User exists but has no (public) repos</p> : null}
                    </div>

                    {/* Card List Conditionals...render more/all results loaded */}
                    {!state.loading && state.numLoaded < state.posts.length ? 
                    <div><button onClick={()=>dispatch({type:'RENDER_MORE'})} className='btn btn-info mb-4' >Render More</button></div> : 
                    !state.loading && state.recents.length > 0 ? 
                    <div className='mb-3'><strong>All results loaded.</strong></div> : null}

                    {!state.loading && !state.error && state.posts.length === 0 ? <div><img src={githubLogo} alt='GithubLogo' /></div> : null}
                </div>



            </div>

        </div>
    )
}

export default Search
