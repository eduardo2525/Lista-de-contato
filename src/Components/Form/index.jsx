import React from 'react'

import Button from './Button'
import InputSearch from './Input'
import { IoAddCircleOutline } from 'react-icons/io5'
import { IoIosSearch } from 'react-icons/io'

import StyleForm from './style'

function Form() {
  return (
    <>
      <StyleForm>
        <div className="container__form">
          <h2>Meus Contatos</h2>
          <Button to="/Lista" icon={<IoAddCircleOutline />} />
        </div>
        <div className="container__search">
          <IoIosSearch
            fontSize={40}
            style={{ marginLeft: '15px', color: '#fff' }}
          />
          <InputSearch />
        </div>
      </StyleForm>
    </>
  )
}

export default Form
