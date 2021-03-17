import React, {ReactDOM ,useEffect, useState} from 'react'
import { Sights } from './Sights'
import {History} from './History'
import Image from './pond.jpg'

function Main () {

    const [view, setView] = useState('main')

    const styles = {
            height: 800,
            backgroundImage: `url(${Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: `calc(100vw + 48px)`,
            margin: -24,
            padding: 24
        
    }

    const sightClick = () => {
        setView('sights')
    }

    const historyClick = () => {
        setView('history')
    }

    if(view === 'main') {

            return <div id="Buttons" className="center" style={styles}>
            <button className="btn waves-effect waves-light" onClick={sightClick}  marginBotton='10px'>Наши Достопримечательности</button>
            <button className="btn waves-effect waves-light" onClick={historyClick}>История Мешково</button>
    </div>
    } if(view === 'history') {
        return <History />
    } if(view === 'sights') {
        return <Sights />
    }
}

export {Main}