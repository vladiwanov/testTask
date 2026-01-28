import React from 'react';
import s from './PCSide.module.scss';
import getPcChoice from '../PCside/pcChoce';

import { useGameChoice } from '../../store';

export default function PCside() {
  const onPcChoiceId = useGameChoice(state => state.getPcChoiceId);
  const onPcChoiceName = useGameChoice(state => state.getPcChoiceName);
  const onPcChoiceImg = useGameChoice(state => state.getPcChoiceImg);
  // const getPcChoiceId = () => {
  //   const pcChoiceId = getPcChoice();
  //   return onPcChoiceId(pcChoiceId);
  // };
  // getPcChoiceId();

  const pcChoice = getPcChoice();
  onPcChoiceId(pcChoice.pcId);
  onPcChoiceName(pcChoice.pcName);
  onPcChoiceImg(pcChoice.pcImg);

  return (
    <section className={s.section}>
      <h2 className={s.title}>PC Choice</h2>
      <p className={s.pc}>???</p>
    </section>
  );
}
