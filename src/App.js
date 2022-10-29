import { useState } from 'react';
import './index.css';

const App = () => {
const [diceNumber, setDiceNumber] = useState(6)
const [diceNumber2, setDiceNumber2] = useState(1)

const refreshDice = () => {
const randomNo = Math.floor(Math.random() * 6) +1
setDiceNumber(randomNo)
const randomNo2 = Math.floor(Math.random() * 6) +1
setDiceNumber2(randomNo2)
}

  return (
    <div>
      <center>     
      <img width={300} height={300} src={require(`./assets/${diceNumber}.png`)}></img>
      <img width={300} height={300} src={require(`./assets/${diceNumber2}.png`)}></img>
      <br></br>
      <button onClick={()=> refreshDice()} className='button'>Roll</button>
      </center>
    </div>
  );
}

export default App;
