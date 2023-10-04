import NavBar from './components/NavBar'
import AllPlayers from './components/AllPlayers'
import { BrowserRouter } from 'react-router-dom'

import './index.css'



function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AllPlayers />
      </BrowserRouter>
    </>
  )
}

export default App
