const initialState: any = {
  graphArea: {
    height: 100,
    width: 100
  },
  searchTerm: '',
  fruits: {
    fruitList: [],
    isLoading: false,
    error: false,
    errorData: []
  }
};

const auth = {
  loggedIn: false,
  user: {
    firstName: 'John',
    lastName: 'Doe'
  }
};

const routes: Routes = [
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
    url: '/FlexTest',
    name: 'Flex Test',

    children: []
  },
  {
    url: '/Graph',
    name: 'Graph',

    children: []
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
      }
    ]
  }
];

export default { ...initialState, routes, auth };
