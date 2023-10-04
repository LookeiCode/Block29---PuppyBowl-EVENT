import React from 'react'
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Link } from "react-router-dom";

export default function NavBar() {

    return (
        <>
            <div className="NavBar">
                <Link to='AllPlayers.jsx'>All Players</Link>
                <Link to='NewPlayerForm.jsx'>New Player Form</Link>
                <Link to='SinglePlayer.jsxL'>Single Player</Link>
            </div>
        </>
    )
}


{/* <BrowserRouter>
    <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/players/:id element={<NewPlayerForm />}>
        <Route path='/players/:id element={<SinglePlayer />}>
    </Routes>
</BrowserRouter> */}