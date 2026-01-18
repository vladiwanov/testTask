import { create } from 'zustand';

export const useGameChoice = create(set => ({
  usChoiceId: null,
  pcChoiceId: null,
  usChoiceName: null,
  pcChoiceName: null,
  usChoiceImg: null,
  pcChoiceImg: null,

  getUserChoiceId: usargId =>
    set(state => {
      state.usChoiceId = usargId;
      console.log('PC_CHOICE_IN_STATE:::::', state.usChoiceId);

      return { usChoiceId: state.usChoiceId };
    }),

  getPcChoiceId: pcargId =>
    set(state => {
      state.pcChoiceId = pcargId;
      // console.log('PC_CHOICE_IN_STATE:::::', state.pcChoice);
      return { pcChoiceId: state.pcChoiceId };
    }),

  getUserChoiceName: usargName =>
    set(state => {
      state.usChoiceName = usargName;
      // console.log('USER_CHOICE_IN ST?ATE:::::', state.usChoice);
      return { usChoiceName: state.usChoiceName };
    }),

  getPcChoiceName: usargName =>
    set(state => {
      state.pcChoiceName = usargName;
      // console.log('USER_CHOICE_IN ST?ATE:::::', state.usChoice);
      return { pcChoiceName: state.pcChoiceName };
    }),

  getUserChoiceImg: usargImg =>
    set(state => {
      state.usChoiceImg = usargImg;
      // console.log('USER_CHOICE_IN ST?ATE:::::', state.usChoice);
      return { usChoiceImg: state.usChoiceImg };
    }),

  getPcChoiceImg: usargImg =>
    set(state => {
      state.pcChoiceImg = usargImg;
      // console.log('USER_CHOICE_IN ST?ATE:::::', state.usChoice);
      return { pcChoiceImg: state.pcChoiceImg };
    }),

  resetState: () =>
    set(state => {
      state.pcChoiceId = null;
      state.usChoiceId = null;
      state.pcChoiceName = null;
      state.usChoiceName = null;
      state.pcChoiceImg = null;
      state.usChoiceImg = null;

      return {
        usChoiceId: state.usChoiceId,
        pcChoiceId: state.pcChoiceId,
        usChoiceName: state.usChoiceName,
        pcChoiceName: state.pcChoiceName,
        usChoiceImg: state.usChoiceImg,
        pcChoiceImg: state.pcChoiceImg,
      };
    }),
}));
