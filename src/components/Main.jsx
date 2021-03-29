import React from 'react'
import Image from './pond.jpg'

function Main(props) {

        const { setView = Function.prototype } = props;

        const styles = {
                height: 550,
                backgroundImage: `url(${Image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: `calc(100vw + 48px)`,
                margin: -24,
                padding: 24
        };
        return <div id="Buttons" className="center pages" style={styles}>
                <button className="btn waves-effect waves-light buttons" onClick={() => setView('sights')}>Наши Достопримечательности</button>
                <button className="btn waves-effect waves-light buttons" onClick={() => setView('history')}>История Мешково</button>
        </div>;
}

export {Main}