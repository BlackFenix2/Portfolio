import mobileModel, { MobileModel } from './mobileModel';
import todoModel, { TodoModel } from './todoModel';

export interface Store {
  mobile: MobileModel;
  todo: TodoModel;
}

const storeModel: Store = {
  mobile: mobileModel,
  todo: todoModel
};

export default storeModel;
