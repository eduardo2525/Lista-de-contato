import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  adicionar: []
}

const adicionerSlice = createSlice({
  name: 'adicionar',
  initialState,
  reducers: {
    adicionar: (state, action) => {
      state.adicionar.push(action.payload)
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
