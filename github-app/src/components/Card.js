import React from 'react'
import './styles.css'

function Card(props) {
    let date = new Date(props.postObj.created_at).toLocaleDateString()
    return (
        <a href={props.postObj.html_url} target='_blank' rel='noreferrer' className='plain'>
            <div className="card mb-2">
                <div className="card-body">
                    <h5 className="card-title">{props.postObj.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{date} &#8226; {props.postObj.language}</h6>
                    <p className="card-text">{props.postObj.description}</p>
                </div>
            </div>
        </a>
    )
}

export default Card
