import React from "react"
import { Link } from "react-router-dom"
import './navar.sass'
import perfil from '../Img/profile.png'
import clock from '../Img/clock.png'
import home from '../Img/home.png'




export default function Navbar() {
    return (

        <nav className="navbar">

            <Link to='/Clock'> <img src={clock} alt='' ></img ></Link>
            <Link to='/home'> <img alt=''src={home}></img ></Link>
            <Link to='/Profile'> <img alt='' src={perfil} ></img></Link>

        </nav>


    )
}
