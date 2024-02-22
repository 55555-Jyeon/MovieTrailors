import { API_URL } from "../app/const";
import styles from "../styles/similar-movie.module.css";
import Link from "next/link";

async function getSimilarMovies(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

export default async function SimilarMovies({ id }: { id: string }) {
  const movies = await getSimilarMovies(id);
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <div key={id} className={styles.movie}>
          <img src={movie.poster_path} alt={movie.title} />
          <Link prefetch href={`/movies/${movie.id}`}>
            {movie.title}
          </Link>
          <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
          <p>{movie.release_date}</p>
        </div>
      ))}
    </div>
  );
}
