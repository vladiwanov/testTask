import React from 'react';
import s from './StartModule.module.scss';
import Userside from '../../components/Userside';
import PCside from '../../components/PCside/PCside';

export default function StartModule() {
  return (
    <section className={s.section}>
      <div className={s.startModule}>
        <Userside />
        <PCside />
      </div>
    </section>
  );
}
