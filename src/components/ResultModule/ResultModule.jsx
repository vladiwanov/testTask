import React from 'react';
import { useGameChoice } from '../../store';
import s from './ResultModule.module.scss';
import RestartButton from '../RestartButton';

export default function ResultModule() {
  const userChoiceId = useGameChoice(state => state.usChoiceId);
  // const state = useGameChoice(state => state);
  const pcChoiceId = useGameChoice(state => state.pcChoiceId);
  console.log('USER_CHOICE IN REZULTMODULE IS :::::', userChoiceId);
  console.log('PC_CHOICE IN REZULTMODULE IS :::::', pcChoiceId);
  // console.log('STATE IN REZULTMODULE IS :::::', state);

  const gameRez = () => {
    switch (pcChoiceId) {
      case userChoiceId - 1 || userChoiceId + 2:
        // case userChoice - 1:
        return ' PC';
      case userChoiceId + 1 || userChoiceId - 2:
        // case userChoice + 1:
        return ' User';
      case userChoiceId:
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
