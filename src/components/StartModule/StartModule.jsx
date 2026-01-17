import React from 'react';
import s from './StartModule.module.scss';
import Userside from '../../components/Userside';
import PCside from '../../components/PCside/PCside';
import { useGameChoice } from '../../store';

export default function StartModule() {
  const state = useGameChoice(state => state);
  console.log('STATE IN START_MODULE IS :::::', state);

  return (
    <section className={s.section}>
      <div className={s.startModule}>
        <Userside />
        <PCside />
      </div>
    </section>
  );
}
