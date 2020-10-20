import React from 'react'
import './style.css'

const Card = (props) => {
    return (
        <div className="SetContent">
            {props.children}
        </div>
    )
}
export default Card;