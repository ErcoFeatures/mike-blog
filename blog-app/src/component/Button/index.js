import React from 'react'
import './styles.css'
 export const Button = (props) => {
    return (
        <div className={"button-style " +props.classStyle} onClick={props.handleClick}>{props.label}</div>
    )
 }