import React from 'react';
import s from './PCSide.module.scss';
import getPcChoice from '../PCside/pcChoce';

import { useGameChoice } from '../../store';

export default function PCside() {
  const onPcChoice = useGameChoice(state => state.getPcChoice);

  const getPcChoiceId = () => {
    const pcChoiceID = getPcChoice();
    return onPcChoice(pcChoiceID);
  };

  getPcChoiceId();

  const pcChoice = getPcChoice();

  onPcChoice(pcChoice);

  return (
    <section>
      <h2>PC Choice</h2>
      <p className={s.pc}>???</p>
    </section>
  );
}
