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
                    <Link className="navBarItems" to='AllPlayers'>All Players |</Link>
                    <Link className="navBarItems" to='NewPlayerForm'>New Player Form |</Link>
                    <Link className="navBarItems" to='poop'>Single Player</Link>
                </div>
            </div>
        </>
    )
}