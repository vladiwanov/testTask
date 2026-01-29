import s from './GameModule.module.scss';
// import { useGameChoice } from '../../store';

import StartModule from '../../components/StartModule';
// import { getLanguageMemoised } from "redux/languages/languages-selector";
// import LangContentSelector from "../../additional-components/LanguageContentSelector";

export default function GameModule() {
  // const gameState = useGameChoice(state => state);
  // console.log('SATATE IN START_MODULE::::', gameState);

  return (
    <>
      <h2 className={s.mainTitle}>You are playing with the Computer.</h2>
      <StartModule />
    </>
  );
}
