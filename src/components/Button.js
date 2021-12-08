import React from 'react'
import "./Button.css"

const Button = (props) => {
    let cl = "button" + (props.inverted ? " inverted" : "");

    const change = () => {
        props.changeColor(props.color);
    }

    return (
        <div className={`${cl}`}>
            <button onClick={change} style={props.bg}>
                {props.text}
            </button>
        </div>
    )
}

export default Button
