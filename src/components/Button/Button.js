import React from 'react'
import PropTypes from "prop-types"
import './Button.css'


const Button=({text,onClick})=>{
return(
    <button className='custom-button' onClick={onClick}>{text}</button>
)
}

Button.propTypes = {
    onClick : PropTypes.string.isRequired,
    text : PropTypes.string,

}

Button.default = {
    text : "Tıkla"
}

export default Button