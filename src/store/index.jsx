import { configureStore } from '@reduxjs/toolkit'
import adicionerReducer from './reducers/AdicionarSlice'

const store = configureStore({
  reducer: {
    adicionar: adicionerReducer
  }
})

export default store
