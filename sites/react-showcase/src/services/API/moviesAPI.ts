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
  async getMoviesList(body?): Promise<MovieListResponse> {
    return externalApiRequest(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_TOKEN}`,
      methods.GET
    );
  },
};

export default moviesAPI;
