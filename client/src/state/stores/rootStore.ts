import remotedev from 'mobx-remotedev';

// import stores

import FruitStore from './fruitStore';
import RouteStore from './routeStore';
import ShowStore from './showStore';
import TodoStore from './todoStore';

class RootStore {
  TodoStore = new TodoStore();
  ShowStore = new ShowStore();
  FruitStore = new FruitStore();
  RouteStore = new RouteStore();
}

// export default remotedev(new RootStore(), { global: true });
export default new RootStore();
