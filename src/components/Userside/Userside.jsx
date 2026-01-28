import { NavLink } from 'react-router';
import s from './Userside.module.scss';
import usrImg from '../../db/images-db/imges.js';
import routes from '../../routes';
// import img from '../../img/pureImg/rock_pure.png';
import { useGameChoice } from '../../store';

export default function Userside() {
  // const gameState = useGameChoice(state => state);
  // console.log('SATATE IN START_USERSIDE_MODULE::::', gameState);
  const onUserChoiceId = useGameChoice(state => state.getUserChoiceId);
  const onUserChoiceName = useGameChoice(state => state.getUserChoiceName);
  const onUserChoiceImg = useGameChoice(state => state.getUserChoiceImg);

  // console.log('ON_USER_SIDE_IS:::::🚘:::', onUserChoiceId);

  const { rez } = routes;

  const gameFun = (id, name, path) => {
    onUserChoiceId(id);
    onUserChoiceName(name);
    onUserChoiceImg(path);

    // console.log('SATATE IN START_USERSIDE_MODULE::::', gameState);
  };

  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.title}>Make You Choice</h2>
        <div className={s.imgarray}>
          {/* <img src={img} alt="" /> */}
          {usrImg.map(({ name, id, path }) => (
            <li key={id}>
              <NavLink
                className={s.button}
                onClick={() => gameFun(id, name, path)}
                to={rez}
              >
                {/* <button className={s.button} onClick={() => gameFun(id)}> */}
                <img src={path} alt={name} className={s.img} />
                {/* </button> */}
              </NavLink>
            </li>
          ))}
        </div>
      </div>
    </section>
  );
}
