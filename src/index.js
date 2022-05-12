import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

//import CSS
import '../src/css/style.css';


const title = '';

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
      />
   )
 }

const animalFacts = (<div>
    <h1> {title ? title : 'Click an animal for a fun fact.' } </h1>
    {background}
      <div className='animals'>
        {images}
      </div>
    </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));

