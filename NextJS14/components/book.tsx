"use client";

import Link from "next/link";
import styles from "../styles/book.module.css";
import { useRouter } from "next/navigation";
import BookInfo from "./book-info";

interface IBookProps {
  title: string;
  encoded: string;
}

export default function Book({ title, encoded }: IBookProps) {
  const router = useRouter();
  return (
    <div className={styles.book}>
      <Link href={`/list/${encoded}`}>{title}</Link>
    </div>
  );
}
