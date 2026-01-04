import React from 'react';
import s from './MainPageView.module.scss';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
// import { getLanguageMemoised } from "redux/languages/languages-selector";
// import LangContentSelector from "../../additional-components/LanguageContentSelector";

export default function MainPageView() {
  const { game } = routes;
  return (
    <div className={s.mainContainer}>
      <h1 className={s.mainTitile}>Hi! It's a Start Page</h1>
      <NavLink className={s.startButton} to={game}>
        Let Start
      </NavLink>
    </div>
  );
}
