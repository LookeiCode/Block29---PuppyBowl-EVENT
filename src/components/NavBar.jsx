import React from 'react'
import ReactDOM from "react-dom";

import { Route, Routes, Link } from "react-router-dom";

import Home from './Home'
import AllPlayers from './AllPlayers'
import NewPlayerForm from './NewPlayerForm'
import SinglePlayer from './SinglePlayer'

export default function NavBar() {

    return (
        <>
            <div className="NavContainer">
                <div className="NavBar">
                    <Link id="FirstNavBItem" className="navBarItems" to='/'>Home |</Link>
                    <Link className="navBarItems" to='AllPlayers.jsx'>All Players |</Link>
                    <Link className="navBarItems" to='NewPlayerForm.jsx'>New Player Form |</Link>
                    <Link className="navBarItems" to='SinglePlayer.jsx'>Single Player</Link>
                </div>

                <div>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='AllPlayers' element={<AllPlayers />} />
                        <Route path='NewPlayerForm' element={<NewPlayerForm />} />
                        <Route path='SinglePlayer' element={<div></div>} />
                    </Routes>
                </div>
            </div>
        </>
    )
}