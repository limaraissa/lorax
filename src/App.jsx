
import Home from './pages/Home'
import Personagens from './pages/Personagens'
import Sinopse from './pages/Sinopse'
import Header from './componentes/Header'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path:"/personagens",
    element: <Personagens/>
  },
  {
    path:"/sinopse",
    element:<Sinopse/>
  }
])

 function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App