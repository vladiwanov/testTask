import React, { useState } from 'react';
import { NavLink } from 'react-router';
import s from './Userside.module.scss';
import usrImg from '../../db/images-db/userImg';
import routes from '../../routes';
// import img from '../../img/pureImg/rock_pure.png';

export default function Userside() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [path, setPath] = useState('');

  const { rez } = routes;

  const gameFun = (a1, a2, a3) => {
    return setName(a1);
  };

  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.title}>Make You Choice</h2>
        {/* <img src={img} alt="" /> */}
        {usrImg.map(({ name, id, path }) => (
          <li key={id}>
            <NavLink
              className={s.button}
              onClick={(name, id, path) => gameFun(name, id, path)}
              to={rez}
            >
              <img src={path} alt={name} />
            </NavLink>
          </li>
        ))}
      </div>
    </section>
  );
}
