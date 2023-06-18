import axios from 'axios';

// https://api.themoviedb.org/3/trending/all/day?api_key=2efe12f2d8ec1931a4da9a2eb0f9411a

export const getTrendingVideo = axios.get(
  'https://api.themoviedb.org/3/trending/all/day?api_key=2efe12f2d8ec1931a4da9a2eb0f9411a'
);

export const getMovieGenereId = (id) =>
  axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=2efe12f2d8ec1931a4da9a2eb0f9411a' +
      '&with_genres=' +
      id
  );
