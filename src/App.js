import foods from './foods';
import { randomFood,remove } from './helpers'
import './App.css';

function App() {
  const randomFruit = randomFood(foods);
  const removeFruit = remove(randomFruit,foods);
  
  return (
    <div className="App">
      <p>I’d like one {randomFruit} please</p>
      <p>Here you go  {randomFruit}</p>
      <p>Delicious! May I have another?</p>
      <p>sorry we have only</p>
      <p>{removeFruit}</p>


    </div>
  );
}

export default App;
