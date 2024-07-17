const API_Key = "77a0293cacde0508e55c6d5fc6e9dd28";
const BASE_PATH = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2EwMjkzY2FjZGUwNTA4ZTU1YzZkNWZjNmU5ZGQyOCIsIm5iZiI6MTcyMTIxMDc3NS4wNjA1NDQsInN1YiI6IjY2OTc5MzJhZWU2MjEwMTQ2YTY4MTg4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ayo8LC8qQxUyqvUCuscRLP7jAkdOWm7t-yFQmgi1e1c",
  },
};

interface IMovie {
  backdrop_path: string;
  overview: string;
  poster_path: string;
  title: string;
  id: number;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };

  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(
    `${BASE_PATH}/movie/now_playing?language=ko-KR&page=1`,
    options
  ).then((response) => response.json());
}
