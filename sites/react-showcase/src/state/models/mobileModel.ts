import { Action, action } from 'easy-peasy';

export interface MobileModel {
  isMobile: boolean;
  toggleMobile: Action<MobileModel, boolean>;
}

const mobileModel: MobileModel = {
  isMobile: false,
  toggleMobile: action((state, payload) => {
    return {
      ...state,
      isMobile: payload,
    };
  }),
};

export default mobileModel;
