import React from "react"
import exit from '../../Img/salida.png'
import In from '../../Img/entrada.png'
import './ClockRegister.sass'
import clockUserIn from "../../logic/clockUserIn"
import toast, { Toaster } from "react-hot-toast";
import clockUserOut from "../../logic/clockUserOut"

export default function ClockRegister() {

    const registerTimeIn = () => {
        clockUserIn(sessionStorage.token)
            .then((result) => {
                // TODO remake toast

                toast.success(` Cloked in register`)
            })
            .catch(error => {
                toast.error(`${error}`)
            })
    }

    const registerTimeOut = event => {
        event.preventDefault()
        const clockId = event.target.clockId.value 
        clockUserOut(sessionStorage.token, clockId)
            .then((result) => {
                if (!result)
                    toast.error(` Error !!!`)

                toast.success(` Cloked out register`)
            })
            .catch(error => {
                toast.error(`${error}`)
            })
    }
    return (
        <div className="center_row">
            <button className="btn" onClick={registerTimeIn}><img src={In} alt=''></img></button>
            <button className="btn_red" onClick={registerTimeOut}><img src={exit} alt=''></img></button>
            <Toaster />
        </div>
    )
}

