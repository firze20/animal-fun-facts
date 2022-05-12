import {animals} from './animals.js'
//CSS
import './css/style.css'

let title = '';

const background = (
  <img
    className='background'
    alt='ocean'
    src={require('./images/ocean.jpg')}
   />
);

let images = [];

for (let animal in animals) {
  console.log(animal);
  images.push(
    <img 
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].images}
      role='button'
    />
  )
}


const animalFacts = (
  <div>
  <h1>
      {title ? title : 'Click an animal for a fun fact!'}
    </h1>
    {background}
    <div className='animals'>
      {images}
    </div>
  </div>
);



function App() {
  return (
    <div className="App">
      {animalFacts}
    </div>
  );
}

export default App;

