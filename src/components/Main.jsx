import React from 'react'
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
    return <div id="Buttons" className="center" style={styles}>
            <button className="btn waves-effect waves-light" onClick={() => setView('sights')} >Наши Достопримечательности</button>
            <button className="btn waves-effect waves-light" onClick={() => setView('history')}>История Мешково</button>
    </div>
}

export {Main}