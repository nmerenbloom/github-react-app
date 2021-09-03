import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { UserContext } from '../App'

function DataFetching() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromBtnClick, setIdFromBtnClick] = useState(1)

    const user = useContext(UserContext)

    const handleClick = () => {
        setIdFromBtnClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[idFromBtnClick])

    return (
        <div>
            <h3>User- {user}</h3>
            <input onChange={(e) => setId(e.target.value)} value={id} type='text'/>
            <button onClick={handleClick} type='button'>Fetch Data</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                 posts.map(p => <li key={p.id}>{p.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
