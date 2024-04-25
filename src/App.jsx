import React from 'react'
import Header from './componentes/Header'
import SS from './componentes/Sinopse'
import PP from './componentes/personagens'
import img1 from './assets/lorax1.jpeg'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


 function App() {
  return (
    <div place-content-center justify-center flex>
      <Header/>
      <img src={img1} alt="imagem capa do filme lorax"  className='w-96 h-80 place-content-center rounded-2xl'/>
      <SS/>
      <PP/>
    </div>
  )
}

export default App