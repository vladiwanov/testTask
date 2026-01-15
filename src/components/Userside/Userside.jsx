import { NavLink } from 'react-router';
import s from './Userside.module.scss';
import usrImg from '../../db/images-db/userImg';
import routes from '../../routes';
// import img from '../../img/pureImg/rock_pure.png';
import { useGameChoice } from '../../store';

export default function Userside() {
  const getChoice = useGameChoice(state => state.getUserChoice);

  const { rez } = routes;

  const gameFun = id => {
    getChoice(id);
  };

  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.title}>Make You Choice</h2>
        {/* <img src={img} alt="" /> */}
        {usrImg.map(({ name, id, path }) => (
          <li key={id}>
            <NavLink className={s.button} onClick={() => gameFun(id)} to={rez}>
              <img src={path} alt={name} />
            </NavLink>
          </li>
        ))}
      </div>
    </section>
  );
}
