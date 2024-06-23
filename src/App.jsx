import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cadastro from './pages/Cadastro'

import EstiloGlobal from './Styles/index'
import Home from './pages/Home/index'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Lista',
    element: <Cadastro />
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <main>
        <div className="container">
          <RouterProvider router={rotas} />
        </div>
      </main>
    </>
  )
}

export default App
