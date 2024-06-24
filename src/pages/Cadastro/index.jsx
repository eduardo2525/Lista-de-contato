import MaskedInput from 'react-text-mask'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { adicionar } from '../../store/reducers/AdicionarSlice'

import StyloForm from './style'

function Cadastro() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const phoneMask = [
    '+',
    '5',
    '5',
    ' ',
    ' ',
    '(',
    /[1-9]/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ]

  const useNome = (event) => {
    setNome(event.target.value)
  }

  const useEmail = (event) => {
    setEmail(event.target.value)
  }

  const uselFone = (event) => {
    setTel(event.target.value)
  }

  const listaSubmit = (event) => {
    event.preventDefault()
    const novoContato = { nome, email, tel }
    dispatch(adicionar(novoContato))
    setNome('')
    setEmail('')
    setTel('')
    navigate('/')
  }

  return (
    <>
      <StyloForm>
        <h1>Adicione o Contato</h1>
        <label htmlFor="nome">Nome Completo:</label>
        <input
          type="text"
          id="nome"
          placeholder="Seu Nome"
          value={nome}
          onChange={useNome}
          required
        />
        <label htmlFor="e-mail">E-mail:</label>
        <input
          type="email"
          id="e-mail"
          placeholder="Seu Email"
          value={email}
          onChange={useEmail}
          required
        />
        <label htmlFor="tel">Telefone:</label>
        <MaskedInput
          id="tel"
          mask={phoneMask}
          placeholder="Começe pelo DDD de sua cidade"
          value={tel}
          onChange={uselFone}
          required
          style={{ fontSize: '20px' }}
        />
        <button onClick={listaSubmit}>Adicionar</button>
      </StyloForm>
    </>
  )
}

export default Cadastro
