import { create } from 'zustand';

export const useGameChoice = create(set => ({
  usChoice: null,
  pcChoice: null,

  getUserChoice: usarg =>
    set(state => {
      state.usChoice = usarg;
      console.log('STATE_US_CHOICE:::::', state.usChoice);
      return { usChoice: state.usChoice };
    }),

  getPcChoice: pcarg =>
    set(state => {
      state.pcChoice = pcarg;
      console.log('STATE_PC_CHOICE:::::', state.pcChoice);

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
