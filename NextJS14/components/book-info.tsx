import Link from "next/link";
import styles from "../styles/list.module.css";
import { useRouter } from "next/router";
import { Fragment } from "react";

interface IInfoProps {
  title: string;
  encoded: string;
  author: string;
  addr: string;
  image: string;
}

const onClick = () => {
  console.log("-----");
};

export default function BookInfo({
  title,
  encoded,
  author,
  addr,
  image,
}: IInfoProps) {
  return (
    <div className={styles.list}>
      <Fragment>
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <h2>{author}</h2>
        <button>
          <Link href={addr}>Buy now &rarr;</Link>
        </button>
      </Fragment>
    </div>
  );
}
