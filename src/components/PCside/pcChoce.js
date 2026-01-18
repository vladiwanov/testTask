// -----------------------------------
import imgData from '../../db/images-db/imges.js';

const getPcChoice = () => {
  console.log('IMG_DATA_IN_PC_CHOICE:::::', imgData);

  const getPcId = (min, max) => {
    const pcRez = Math.floor(Math.random() * (max - min) + min);
    // console.log('PC_REZULT:::::', pcRez);
    return pcRez;
  };

  const pcId = getPcId(1, 4);

  const pcChoice = imgData.find(item => item.id === pcId);
  console.log('!!!!!!!!!!!!!!', pcChoice);

  const pcName = pcChoice.name;
  const pcImg = pcChoice.path;

  return { pcId, pcName, pcImg };
};
export default getPcChoice;
