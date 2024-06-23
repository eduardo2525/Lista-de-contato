import React from 'react'

import StyleButton from './style'

const Button = ({ to, icon }) => {
  return <StyleButton to={to}>{icon}</StyleButton>
}

export default Button
