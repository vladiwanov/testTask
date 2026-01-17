import { create } from 'zustand';

export const useGameChoice = create(set => ({
  usChoiceId: null,
  pcChoiceId: null,
  // usChoiceName: null,
  // pcChoiceName: null,

  getUserChoiceId: usidarg =>
    set(state => {
      state.usChoiceId = usidarg;
      console.log('PC_CHOICE_IN_STATE:::::', state.usChoiceId);

      return { usChoiceId: state.usChoiceId };
    }),

  getPcChoiceId: pcargId =>
    set(state => {
      state.pcChoiceId = pcargId;
      // console.log('PC_CHOICE_IN_STATE:::::', state.pcChoice);
      return { pcChoiceId: state.pcChoiceId };
    }),

  // getUserChoiceName: usnamearg =>
  //   set(state => {
  //     state.usChoicename = usnamearg;
  //     // console.log('USER_CHOICE_IN ST?ATE:::::', state.usChoice);
  //     return { usChoicename: state.usChoicename };
  //   }),

  // getPcChoiceName: usarg =>
  //   set(state => {
  //     state.pcChoiceName = usarg;
  //     // console.log('USER_CHOICE_IN ST?ATE:::::', state.usChoice);
  //     return { pcChoiceName: state.pcChoiceName };
  //   }),

  // resetState: () =>
  //   set(state => {
  //     state.pcChoiceId = null;
  //     // state.pcChoiceName = null;
  //     state.usChoiceId = null;
  //     // state.usChoiceName = null;

  //     return {
  //       usChoiceId: state.usChoiceId,
  //       pcChoiceId: state.pcChoiceId,
  //       // usChoiceName: state.usChoiceName,
  //       // pcChoiceName: state.pcChoiceName,
  //     };
  //   }),
}));
