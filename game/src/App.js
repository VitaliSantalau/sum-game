import React, {useState} from 'react';
import Game from './components/Game';
import {ANSWERS_COUNT} from './consts/consts';
import getRandomNumber from './utils/getRandomNumber';
import shuffle from './utils/shuffle';

const App = () => {
  const [idGame, setIdGame] = useState(1);

  const answers = Array.from({length: ANSWERS_COUNT}, () =>
    getRandomNumber(0, 10),
  );

  const sum = shuffle(answers)
    .slice(0, ANSWERS_COUNT - 2)
    .reduce((acc, item) => acc + item);

  const resetGame = () => {
    setIdGame(prev => prev + 1);
  };

  return <Game key={idGame} playNext={resetGame} sum={sum} answers={answers} />;
};

export default App;
