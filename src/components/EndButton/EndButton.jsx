import React from 'react';
import { Link } from 'react-router-dom';
import EndPageView from '../../views/EndPageView/EndPageView';
import s from '../EndButton/EndButton.module.scss';
import routes from '../../routes';

export default function EndButton() {
  const { end } = routes;
  return (
    <div className={s.RestartButton}>
      <Link to={end} className={s.Navlink}>
        <h2 className={s.EndButtonTitle}>End Game</h2>
      </Link>
    </div>
  );
}
