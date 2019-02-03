import remotedev from 'mobx-remotedev';

// import stores
import fruitStore from './fruitStore';
import routeStore from './routeStore';
import showStore from './showStore';
import todoStore from './todoStore';

const TodoStore = new todoStore();
const ShowStore = new showStore();
const FruitStore = new fruitStore();
const RouteStore = new routeStore();

const RootStore = {
  // TodoStore,
  // ShowStore,
  // FruitStore
  // RouteStore
};

export default RootStore;
