import React from 'react';
import s from './EndPageView.module.scss';

export default function EndPageView() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.title}>GAME OVER</h2>
      </div>
    </section>
  );
}
