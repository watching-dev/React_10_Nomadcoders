import { Fragment, Suspense } from "react";
import BookInfo from "../../../../components/book-info";
import styles from "../../../../styles/list.module.css";

const API_URL = "https://books-api.nomadcoders.workers.dev/list?name=";

async function getBook(id: string) {
  const response = await fetch(`${API_URL}${id}`);
  return response.json();
}

interface IGParams {
  params: { encoded: string };
}

export async function generateMetadata({ params: { encoded } }: IGParams) {
  return {
    title: "title",
  };
}

export default async function BookDetail({ params: { encoded } }: IGParams) {
  const books = await getBook(encoded);
  const title = books.results.list_name;
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <h1 className={styles.h1}>{title}</h1>
        {books.results.books.map((book) => (
          <BookInfo
            key={book.title}
            title={book.title}
            encoded={book.encoded}
            author={book.author}
            addr={book.amazon_product_url}
            image={book.book_image}
          />
        ))}
      </Suspense>
    </div>
  );
}
