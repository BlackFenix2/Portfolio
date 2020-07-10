import { autorun, observable, action } from 'mobx';
import { createContext } from 'react';
import { Movie, moviesAPI } from 'src/services/API/moviesAPI';

class ShowStore {
  @observable searchTerm = '';

  @observable shows: Movie[] = [];

  unfilteredShows: Movie[] = [];

  @action fetchMovies = async () => {
    this.unfilteredShows = (await moviesAPI.getMoviesList()).results;

    this.shows = this.unfilteredShows;
  };

  constructor() {
    this.fetchMovies();
  }

  // delay like debounce
  idle = true;

  searchMovies = autorun(
    () => {
      this.shows = this.unfilteredShows.filter(
        (value) =>
          (value.title &&
            value.title.toUpperCase().match(this.searchTerm.toUpperCase())) ||
          (value.name &&
            value.name.toUpperCase().match(this.searchTerm.toUpperCase())) ||
          value.overview.toUpperCase().match(this.searchTerm.toUpperCase())
      );
    },
    {
      delay: 500,
    }
  );
}

export default createContext(new ShowStore());
