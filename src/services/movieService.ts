import axios from 'axios';
import type { Movie } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';

interface TMDBResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const config = {
    params: { query },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  };

  const response = await axios.get<TMDBResponse>(`${BASE_URL}/search/movie`, config);
  return response.data.results;
};

