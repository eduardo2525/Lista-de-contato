import React from 'react'

import Button from './Button'
import { IoAddCircleOutline } from 'react-icons/io5'

import StyleForm from './style'

function Form() {
  return (
    <StyleForm>
      <div className="container__form">
        <h1>Meus Contatos</h1>
        <Button to="/Lista" icon={<IoAddCircleOutline />} />
      </div>
    </StyleForm>
  )
}

export default Form
