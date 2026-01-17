import React from 'react';
import s from './PCSide.module.scss';
import getPcChoice from '../PCside/pcChoce';

import { useGameChoice } from '../../store';

export default function PCside() {
  const onPcChoiceId = useGameChoice(state => state.getPcChoiceId);
  // const getPcChoiceId = () => {
  //   const pcChoiceId = getPcChoice();
  //   return onPcChoiceId(pcChoiceId);
  // };
  // getPcChoiceId();

  const pcChoice = getPcChoice();
  onPcChoiceId(pcChoice);

  return (
    <section>
      <h2>PC Choice</h2>
      <p className={s.pc}>???</p>
    </section>
  );
}
