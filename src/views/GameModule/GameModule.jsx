import s from './GameModule.module.scss';

import StartModule from '../../components/StartModule';
// import { getLanguageMemoised } from "redux/languages/languages-selector";
// import LangContentSelector from "../../additional-components/LanguageContentSelector";

export default function GameModule() {
  return (
    <>
      <h2 className={s.mainTitile}>You are playing with the Computer.</h2>
      <StartModule />
    </>
  );
}
