import { createStore, EasyPeasyConfig } from 'easy-peasy';

import storeModel from './models';

const config: EasyPeasyConfig = {
  // disable passing mutable state
  disableImmer: true,

  // enalbe devtools in development only
  devTools: process.env.NODE_ENV === 'development',
};

const store = createStore(storeModel, config);

export default store;
