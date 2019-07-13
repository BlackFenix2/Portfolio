export default class RouteStore {
  readonly routes: Routes = [
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
          url: '/Components',
          name: 'Component Test'
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
      url: '/CRUD',
      name: 'CRUD Test',

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
