import React from 'react'
import {Link} from 'react-router-dom'
import Image from './pond.jpg'

function Main() {

        const styles = {
                backgroundImage: `url(${Image})`,
                height: 800,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: `calc(100vw + 48px)`,
                margin: -24,
                padding: 24
        };
        return <div id="Buttons" className="center pages" style={styles} >
                 <Link className="btn waves-effect waves-light buttons" to="/sights">Наши Достопримечательности</Link>
                <Link className="btn waves-effect waves-light buttons" to="/history">История Мешково</Link>
        </div>;
}

export {Main}
