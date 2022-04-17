import { methods, externalApiRequest } from './apiRoot';

const API_TOKEN = 'cbd419225ee57f107775d557a7dea4b1';

export interface Movie {
  id: number;
  name: string;
  video: boolean;
  vote_count: number;
  vote_average: number;
  title: string;
  release_date: string;
  first_air_date: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  poster_path: string;
  popularity: number;
  media_type: string;
}

interface MovieListResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const moviesAPI = {
  async getMoviesList(): Promise<MovieListResponse> {
    console.log('starting fetch');
    const first20Movies = await externalApiRequest<MovieListResponse>(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_TOKEN}`,
      methods.GET
    );
    const second20Movies = await externalApiRequest<MovieListResponse>(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_TOKEN}&page=2`,
      methods.GET
    );

    const fullMovieList: MovieListResponse = {
      page: 1,
      results: [
        ...first20Movies.results,
        ...second20Movies.results.slice(0, 4),
      ],
      total_pages: 2,
      total_results: 24,
    };

    return fullMovieList;
  },
};

export default moviesAPI;
