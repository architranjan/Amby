import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Login from './components/login/Login'

import "../css/style.css"

function App() {
  

  return (
    <>
     <Navbar/>
     < Login />
    </>
  )
}

export default App
