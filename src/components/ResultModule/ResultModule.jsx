import React from 'react';
import { useGameChoice } from '../../store';
import s from './ResultModule.module.scss';
import RestartButton from '../RestartButton';

export default function ResultModule() {
  const userChoice = useGameChoice(state => state.usChoice);
  const pcChoice = useGameChoice(state => state.pcChoice);
  // console.log('USER_CHOICE IN REZULTMODULE IS :::::', userChoice);
  // console.log('PC_CHOICE IN REZULTMODULE IS :::::', pcChoice);

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

  // console.log('RESULT OF GAME:::', gameRez());

  return (
    <section className={s.resultPage}>
      <div className={s.container}>
        <h2 className={s.resultMessage}>
          Winer is: {gameRez()}
          <RestartButton />
        </h2>
      </div>
    </section>
  );
}
