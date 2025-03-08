import React from 'react'
import './dslr.css';

function Dslr({quote}) {
    const randomimage = [
        '/assets/dslr.jpg',
        '/assets/headphones.jpg',
        '/assets/computer.jpg',
        '/assets/cpu.jpg',
        '/assets/drone.jpg',
        '/assets/game-console.jpg',
        '/assets/game.jpg',
        '/assets/iphone.jpeg',
        '/assets/smartwatch.jpg',
        '/assets/technology.jpg'
    ];
    
    const rand=randomimage[Math.floor(Math.random()*10)];

    
  return (
    <div className='dslr' style={{backgroundImage:`url(${rand})`}}>
        {quote?(
          <h1>{quote}</h1>
        ):(
            <>
              <h1>The technology you use impresses no one. </h1>
              <h1>The experience you create with it is everything.</h1>
              <h3>~ SEAN GERETY</h3>
            </>
          )
        }
    </div>
  )
}

export default Dslr