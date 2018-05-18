interface Route {
  url: String;
  name: String;

  children?: Array<Route>;
}

interface Routes extends Array<Route> {}
