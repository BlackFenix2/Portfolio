interface Route {
  url: string;
  name: string;

  children?: Route[];
}

interface Routes extends Array<Route> {}
