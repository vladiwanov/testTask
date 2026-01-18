import React from 'react';
import { useGameChoice } from '../../store';
import s from './ResultModule.module.scss';
import RestartButton from '../RestartButton';

export default function ResultModule() {
  // const userChoiceId = useGameChoice(state => state.usChoiceId);
  const state = useGameChoice(state => state);
  const {
    pcChoiceId,
    pcChoiceName,
    pcChoiceImg,
    usChoiceId,
    usChoiceName,
    usChoiceImg,
  } = state;
  // const pcChoiceId = useGameChoice(state => state.pcChoiceId);
  console.log('USER_CHOICE IN REZULTMODULE IS :::::', usChoiceId);
  console.log('PC_CHOICE IN REZULTMODULE IS :::::', pcChoiceId);
  // console.log('STATE IN REZULTMODULE IS :::::', state);

  const gameRez = () => {
    switch (pcChoiceId) {
      case usChoiceId - 1:
        return ' PC';
      case usChoiceId + 2:
        return ' PC';
      case usChoiceId - 2:
        return ' User';
      case usChoiceId + 1:
        return ' User';
      case usChoiceId:
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
          <div className={s.result}>
            <div className={s.player}>
              <h3>User</h3>
              <img src={usChoiceImg} alt={usChoiceName} />
            </div>
            <div className={s.player}>
              <h3>PC</h3>
              <img src={pcChoiceImg} alt={pcChoiceName} />
            </div>
          </div>
          <RestartButton />
        </h2>
      </div>
    </section>
  );
}
