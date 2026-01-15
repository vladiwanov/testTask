import React from 'react';
import getPcChoice from '../PCside/pcChoce';
import { useGameChoice } from '../../store';

export default function ResultModule() {
  const pcChoice = getPcChoice();
  console.log('PC_CHIOCE:_IN_REZULT::::::::', pcChoice);
  const userChoice = useGameChoice(state => state.usChoice);

  const gameRez = () => {
    switch (pcChoice) {
      case userChoice - 1:
        return 'Won PC';
      case userChoice + 1:
        return 'Won User';
      default:
        return 'equal';
    }
  };

  console.log('RESULT OF GAME:::', gameRez());

  return (
    <section>
      <h2>ResultComponent</h2>
    </section>
  );
}
