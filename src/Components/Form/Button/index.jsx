import React from 'react'

import StyleButton from './style'

const Button = ({ to, icon, onClick }) => {
  return (
    <StyleButton to={to} onClick={onClick}>
      {icon}
    </StyleButton>
  )
}

export default Button
