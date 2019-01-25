// import stores

import RouteStore from './routesStore';
import ShowStore from './showStore';
import TodoStore from './todoStore';

class RootStore {
  TodoStore = new TodoStore();
  RouteStore = new RouteStore();
  ShowStore = new ShowStore();
}
export default new RootStore();
