import { createStore, action, Action } from 'easy-peasy';

export interface Store {
  mobile: {
    isMobile: boolean;
    toggleMobile: Action<{ isMobile: boolean }>;
  };
}
const store = createStore<Store>(
  {
    mobile: {
      isMobile: false,
      toggleMobile: action((state, payload) => {
        return {
          ...state,
          isMobile: !state.isMobile
        };
      })
    }
  },
  {
    disableImmer: true
  }
);

export default store;
