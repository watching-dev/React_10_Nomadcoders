import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div>
      <img src={movie.poster_path} />
      <div>
        <h1>{movie.title}</h1>
        <h3>{movie.vote_average}</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
