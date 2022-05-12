import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

//import CSS
import '../src/css/style.css';

function displayFact(e) {
  const animalName = e.target.alt;
  const randomIndex = Math.floor(Math.random() * (3 - 0) + 0);
  const randomFact = animals[animalName].facts[randomIndex];
  //return randomFact;
  document.getElementById('fact').innerHTML = randomFact;
}

const title = '';

let showBackground = true;



const background = <img
    className='background'
    alt='ocean'
    src={require('./images/ocean.jpg')}
 />;

 const images = [];

 for (const animal in animals) {
   images.push(
     <img
        key={animal}
        className='animal'
        alt={animal}
        src={require(`./images/${animal}.png`)}
        role='button'
        onClick={displayFact}
      />
   )
 }

const animalFacts = (<div>
    <h1> {title ? title : 'Click an animal for a fun fact.' } </h1>
    {showBackground && background }
      <div className='animals'>
        {images}
        <p id='fact'></p>
      </div>
    </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));

