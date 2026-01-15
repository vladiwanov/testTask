import { create } from 'zustand';

export const useGameChoice = create(set => ({
  usChoice: null,
  pcChoice: null,

  getUserChoice: usarg =>
    set(state => {
      state.usChoice = usarg;
      // console.log('USER_CHOICE_IN ST?ATE:::::', state.usChoice);
      return { usChoice: state.usChoice };
    }),

  getPcChoice: pcarg =>
    set(state => {
      state.pcChoice = pcarg;
      // console.log('PC_CHOICE_IN_STATE:::::', state.pcChoice);
      return { pcChoice: state.pcChoice };
    }),

  resetState: () =>
    set(state => {
      state.pcChoice = null;
      state.usChoice = null;

      return {
        usChoice: state.usChoice,
        pcChoice: state.pcChoice,
      };
    }),
}));
