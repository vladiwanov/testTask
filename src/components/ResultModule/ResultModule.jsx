import React from 'react';
import { useGameChoice } from '../../store';
import s from './ResultModule.module.scss';

export default function ResultModule() {
  const userChoice = useGameChoice(state => state.usChoice);
  const pcChoice = useGameChoice(state => state.pcChoice);
  console.log('USER_CHOICE IN REZULTMODULE IS :::::', userChoice);
  console.log('PC_CHOICE IN REZULTMODULE IS :::::', pcChoice);

  const gameRez = () => {
    switch (pcChoice) {
      case userChoice - 1 || userChoice + 2:
        // case userChoice - 1:
        return ' PC';
      case userChoice + 1 || userChoice - 2:
        // case userChoice + 1:
        return ' User';
      case userChoice:
        return ' EQUAL';
      default:
        return 'ERROR';
    }
  };

  console.log('RESULT OF GAME:::', gameRez());

  return (
    <section>
      <h2 className={s.resultMessage}>Winer is {gameRez()} </h2>
    </section>
  );
}
