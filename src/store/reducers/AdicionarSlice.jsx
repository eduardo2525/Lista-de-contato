import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  adicionar: [],
  listaId: 1
}

const adicionerSlice = createSlice({
  name: 'adiciona',
  initialState,
  reducers: {
    adicionar: (state, action) => {
      const novoContato = {
        id: state.listaId,
        ...action.payload
      }
      state.adicionar.push(novoContato)
      state.listaId += 1
    },
    remover: (state, action) => {
      state.adicionar = state.adicionar.filter(
        (adicionar) => adicionar.id !== action.payload
      )
    },
    atualizar: (state, action) => {
      const { id, nome, email, tel } = action.payload
      const contatoIndex = state.adicionar.findIndex(
        (contato) => contato.id === id
      )
      if (contatoIndex >= 0) {
        state.adicionar[contatoIndex] = { id, nome, email, tel }
      }
    }
  }
})

export const { adicionar, remover, atualizar } = adicionerSlice.actions

export default adicionerSlice.reducer
