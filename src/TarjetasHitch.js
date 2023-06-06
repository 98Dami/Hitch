import React, { useState } from 'react'
import './TarjetasHitch.css'
import TarjetaPersona from 'react-tinder-card'

function TarjetasHitch() {
    const [persona, setPersona] = useState([
        {
            nombre: "Churlis",
            url: '../Churlis.jpg'
        },
        {
            nombre: "Dami",
            url: '../Damian.jpg'
        },
        {
            nombre: "Valen",
            url: '../Valen.jpg'
        }
    ])

    return (
        <div className="tarjetasHitch">
            <div className="tarjetasHitch__contenedor">
                {persona.map(persona => (
                    <TarjetaPersona
                        className="swipe"
                        key={persona.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div 
                            className="tarjeta"       
                            style={{ backgroundImage: `url(${persona.url})` }}
                        >
                            <h2>{persona.nombre}</h2>
                        </div>

                    </TarjetaPersona>

                ))}
            </div>

        </div>
    )
}

export default TarjetasHitch
