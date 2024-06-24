import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import { remover } from '../../store/reducers/AdicionarSlice'

import Button from '../Form/Button'
import StyleContainer from './style'

const ContainerContato = () => {
  const contatos = useSelector((state) => state.adicionar.adicionar)
  const dispatch = useDispatch()

  const removerLista = (id) => {
    dispatch(remover(id))
  }

  return (
    <>
      <StyleContainer>
        <ul>
          {contatos.map((contato) => (
            <>
              <li key={contato}>
                <div className="lista__contato">
                  <span>{contato.nome}</span>
                  <span>{contato.email}</span>
                  <span>{contato.tel}</span>
                </div>
                <div className="lista__delete">
                  <Button icon={<MdOutlineModeEditOutline />} />
                  <Button
                    icon={<MdDelete />}
                    onClick={() => removerLista(contato)}
                  />
                </div>
              </li>
            </>
          ))}
        </ul>
      </StyleContainer>
    </>
  )
}

export default ContainerContato
