import { useEffect, useState } from "react";
import Navigation from "../../components/navigation";
import { json } from "stream/consumers";

export const metadata = {
  title: "Home",
};

export default function Page() {
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/moives"
    );
    const json = await response.json();
    setMovies(json);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>hello</h1>
      {JSON.stringify(json)}
    </div>
  );
}
