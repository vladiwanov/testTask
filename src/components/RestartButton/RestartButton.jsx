import React from 'react';
import s from './RestartButton.module.scss';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { useGameChoice } from '../../store';

export default function RestartButton() {
  const resetState = useGameChoice(state => state.resetState);
  const { main } = routes;
  const restartFun = () => {
    resetState();
  };
  return (
    <section className={s.RestartButton}>
      <NavLink className={s.NavLink} to={main} onClick={restartFun}>
        <h2 className={s.RestartButtonTitle}>Do You want to play again?</h2>
      </NavLink>
    </section>
  );
}
