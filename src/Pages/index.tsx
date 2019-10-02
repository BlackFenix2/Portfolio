import * as React from 'react';
import { Link } from 'gatsby';
import { Input } from 'semantic-ui-react';
import showStore from 'src/state/stores/showStore';
import { observer } from 'mobx-react-lite';

interface Props {
  routing: any;
}

const Home = observer((props: Props) => {
  const ShowStore = React.useContext(showStore);

  const goToSearch = event => {
    event.preventDefault();
    props.routing.push('/Shows');
  };

  const handleSearchTermChange = event => {
    ShowStore.searchTerm = event.target.value;
  };

  return (
    <div>
      <p>{ShowStore.searchTerm}</p>
      <form onSubmit={goToSearch}>
        <Input
          onChange={handleSearchTermChange}
          value={ShowStore.searchTerm}
          placeholder="Search..."
          icon="search"
        />
        <Link to="/Shows">or Browse All</Link>
      </form>
    </div>
  );
});

export default Home;
