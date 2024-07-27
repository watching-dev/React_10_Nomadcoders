import Link from "next/link";
import styles from "../../styles/home.module.css";
import Book from "../../components/book";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://books-api.nomadcoders.workers.dev/lists";

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // return fetch(URL).then((response) => response.json());
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  console.log(movies);
  return (
    <div>
      <h1 className={styles.h1}>The New York Times Best Seller Explorer</h1>
      <div className={styles.container}>
        {movies.results.map((book) => (
          <Book
            key={book.list_name_encoded}
            title={book.display_name}
            encoded={book.list_name_encoded}
          />
        ))}
      </div>
    </div>
  );
}
