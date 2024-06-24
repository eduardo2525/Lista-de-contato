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
    }
  }
})

export const { adicionar, remover } = adicionerSlice.actions

export default adicionerSlice.reducer
