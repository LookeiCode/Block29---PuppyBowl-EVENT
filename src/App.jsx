import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import AllPlayers from './components/AllPlayers'
import NewPlayerForm from './components/NewPlayerForm'

import './index.css'



function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='AllPlayers' element={<AllPlayers />} />
            <Route path='NewPlayerForm' element={<NewPlayerForm />} />
            <Route path='SinglePlayer' element={<div></div>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
