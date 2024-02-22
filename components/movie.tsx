"use client";

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps {
  title: string;
  id: string;
  poster: string;
}

export default function Movie({ title, id, poster }: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div key={id} className={styles.movie}>
      <img onClick={onClick} src={poster} alt={title} />
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </div>
  );
}
