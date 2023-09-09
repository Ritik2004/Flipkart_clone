import React from 'react'
import './button.css'

const Button = ({onClick}) => {
  return (
    <div className='container'>
       <button className='chat-icon' onClick={onClick}><i class="fa-regular fa-message"></i></button>
    </div>
  )
}

export default Button
