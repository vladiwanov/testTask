import React from 'react';
import s from './PCSide.module.scss';
import { useGameChoice } from '../../store';

export default function PCside() {
  return (
    <section>
      <h2>PC Choice</h2>
      <p className={s.pc}>???</p>
    </section>
  );
}
