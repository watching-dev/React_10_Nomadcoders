"use client";

import { useEffect, useState } from "react";
import Navigation from "../../components/navigation";

export default function Page() {
  const [isLoaidng, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return <div>{isLoaidng ? "Loading.." : JSON.stringify(movies)}</div>;
}
