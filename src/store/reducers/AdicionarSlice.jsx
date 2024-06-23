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
    }
  }
})

export const { adicionar } = adicionerSlice.actions

export default adicionerSlice.reducer
