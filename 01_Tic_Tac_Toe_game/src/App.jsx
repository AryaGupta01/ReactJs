import Player from './components/Player.jsx';
import Gameboard from './components/Grid.jsx';

import { useState } from "react"

function App() {
  const [activePlayer, setActivePlayer]= useState('X');

  function handleSelectSquare(){
    setActivePlayer((curActivePlayer)=> curActivePlayer==='X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player name="Player 1" symbol="X" isActive={activePlayer==='X'}/>
          <Player name="Player 2" symbol="O" isActive={activePlayer==='O'}/>
        </ol>
        
        <Gameboard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      Comming Soon
    </main>
  )
};

export default App
