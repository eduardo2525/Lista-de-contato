import React from 'react'
import { useSelector } from 'react-redux'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'

import Button from '../Form/Button'
import StyleContainer from './style'

const ContainerContato = () => {
  const contatos = useSelector((state) => state.adicionar.adicionar)

  return (
    <>
      <StyleContainer>
        <ul>
          {contatos.map((contato, index) => (
            <>
              <li key={index}>
                <div className="lista__contato">
                  <span>{contato.nome}</span>
                  <span>{contato.email}</span>
                  <span>{contato.tel}</span>
                </div>
                <div className="lista__delete">
                  <Button icon={<MdOutlineModeEditOutline />} />
                  <Button icon={<MdDelete />} />
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
