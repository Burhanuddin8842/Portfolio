import React from 'react'
import './global.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <div className="background min-h-screen">
        <header>
          <Navbar className="fixed" />
          <Home/>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App