const initialState = {
  graphArea: {
    height: 100,
    width: 100
  },
  searchTerm: '',
  user: {
    firstName: 'test',
    lastName: 'user'
  },
  fruits: {
    fruitList: [],
    isLoading: false,
    error: false,
    errorData: []
  }
};

const routes = [
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

export default { ...initialState, routes };
