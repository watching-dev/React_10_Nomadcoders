import Link from "next/link";

interface IMovieProps {
  id: string;
  title: string;
  poster_path: string;
}

export default function Movie({ id, title, poster_path }: IMovieProps) {
  return (
    <div key={id}>
      <img src={poster_path} alt={title} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
