import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import { remover, atualizar } from '../../store/reducers/AdicionarSlice'

import Button from '../Form/Button'
import StyleContainer from './style'

const ContainerContato = () => {
  const [editar, setEditar] = useState(false)
  const [editarContato, setEditarContato] = useState({
    id: '',
    nome: '',
    email: '',
    tel: ''
  })

  const contatos = useSelector((state) => state.adicionar.adicionar)
  const dispatch = useDispatch()

  const removerLista = (id) => {
    dispatch(remover(id))
  }

  const editarLista = (contato) => {
    setEditar(true)
    setEditarContato(contato)
  }

  const salvarContato = () => {
    dispatch(atualizar(editarContato))
    setEditar(false)
    setEditarContato({ id: null, nome: '', email: '', tel: '' })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditarContato((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <StyleContainer>
      <ul>
        {contatos.map((contato) => (
          <li key={contato.id}>
            {editar && editarContato.id === contato.id ? (
              <div className="lista__contato">
                <input
                  type="text"
                  name="nome"
                  value={editarContato.nome}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  value={editarContato.email}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="tel"
                  value={editarContato.tel}
                  onChange={handleChange}
                />
                <div className="lista__actions">
                  <button onClick={salvarContato}>Salvar</button>
                </div>
              </div>
            ) : (
              <div className="lista__contato">
                <span>{contato.nome}</span>
                <span>{contato.email}</span>
                <span>{contato.tel}</span>
              </div>
            )}
            <div className="lista__delete">
              <Button
                icon={<MdOutlineModeEditOutline />}
                onClick={() => editarLista(contato)}
              />
              <Button
                icon={<MdDelete />}
                onClick={() => removerLista(contato.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </StyleContainer>
  )
}

export default ContainerContato
