import { createStore, action, Action, EasyPeasyConfig } from 'easy-peasy';

export interface Store {
  mobile: {
    isMobile: boolean;
    toggleMobile: Action<{ isMobile: boolean }>;
  };
}

const config: EasyPeasyConfig = {
  // disable passing mutable state
  disableImmer: true,

  // enalbe devtools in development only
  devTools: process.env.NODE_ENV === 'development'
};

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
  config
);

export default store;
