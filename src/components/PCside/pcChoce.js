// -----------------------------------

const getPcChoice = () => {
  const pcFun = (min, max) => {
    const pcRez = Math.floor(Math.random() * (max - min) + min);

    console.log('PC_REZULT:::::', pcRez);
    return pcRez;
  };

  return pcFun(1, 3);
};
export default getPcChoice;
