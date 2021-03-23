import React, { useState} from 'react'
import { Sights } from './Sights'
import {History} from './History'
import Image from './pond.jpg'

const Main = (props) => {

    const {setView} = props;

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
        console.log('sightclick ')
    }

    const historyClick = () => {
        setView('history')
    }

            return <div id="Buttons" className="center" style={styles}>
            <button className="btn waves-effect waves-light" onClick={() => sightClick()} >Наши Достопримечательности</button>
            <button className="btn waves-effect waves-light" onClick={() => historyClick()}>История Мешково</button>
    </div>
}

export {Main}