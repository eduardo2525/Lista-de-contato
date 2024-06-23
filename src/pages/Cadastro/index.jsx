import InputMask from 'react-input-mask'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/AdicionarSlice'

import StyloForm from './style'

function Cadastro() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState(55)

  const dispatch = useDispatch()

  const useNome = (event) => {
    setNome(event.target.value)
  }

  const useEmail = (event) => {
    setEmail(event.target.value)
  }

  const useelFone = (event) => {
    setTel(event.target.value)
  }

  const listaSubmit = (event) => {
    event.preventDefault()
    const novoContato = { nome, email, tel }
    dispatch(adicionar(novoContato))
    setNome('')
    setEmail('')
    setTel(55)
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
        <InputMask
          id="tel"
          mask="+99 (99) 99999-9999"
          maskChar=" "
          value={tel}
          onChange={useelFone}
          required
          style={{ fontSize: '20px' }}
        />
        <button onClick={listaSubmit}>Adicionar</button>
      </StyloForm>
    </>
  )
}

export default Cadastro
