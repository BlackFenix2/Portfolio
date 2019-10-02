import { createContext } from 'react';

export class RouteStore {
  routes: Routes = [
    {
      url: '/Todo',
      name: 'Todo',

      children: []
    },
    {
      url: '/Shows',
      name: 'Shows',

      children: []
    },
    {
      url: '/Test',
      name: 'Tests',
      children: [
        {
          url: '/TestLoading',
          name: 'Test Loading'
        },
        {
          url: '/Styled',
          name: 'Styled'
        },
        {
          url: '/Login',
          name: 'Login Test'
        }
      ]
    },
    {
      url: '/Error',
      name: 'Error',

      children: []
    },
    {
      url: '/Domain',
      name: 'Domain Info',

      children: []
    },
    {
      url: '/Cats',
      name: 'Cats',

      children: []
    },

    {
      url: '/Games',
      name: 'Games',

      children: [
        {
          url: '/TicTacToe',
          name: 'Tic Tac Toe'
        },
        {
          url: '/FlappyBird',
          name: 'Flappy Bird'
        }
      ]
    }
  ];
}

export const routeStore = createContext(new RouteStore());
export default routeStore;
