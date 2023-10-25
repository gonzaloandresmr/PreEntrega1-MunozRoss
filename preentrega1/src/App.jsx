import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  const enlaces = [
    "Inicio",
    "Tienda",
    "Contacto"
  ]

const saludo = "Bienvenidos a la Tienda de Gonzalo"

  return (
    <>
     <Navbar links={enlaces}/>
     <ItemListContainer mensaje={saludo}/>
    </>
  )
}

export default App
