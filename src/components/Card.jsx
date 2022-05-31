import React from 'react'
import { FaMoon } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';
const Card = ({userRandom, colorRandom}) => {
    
    

    return (
        <div className='card' style={{color: colorRandom}}>
            <div className='mensaje'>
                <h1 style={{color: colorRandom}}><FaMoon/></h1>
                <h2>{userRandom.quote}</h2>
            </div>
            <p>{userRandom.author}</p>
            <div className="boton">
                <span onClick={() => window.location.reload()}><FaArrowAltCircleRight/></span>
            </div>
        </div>
    )
}

export default Card