interface Route {
  url: string;
  name: string;

  children?: Route[];
}

type Routes = Route[];
