import Link from "next/link";
import { API_URL } from "../app/const";
import styles from "../styles/movie-credit.module.css";
import { skipNameView } from "../app/utils/handle-overflow-text";

async function getMovieCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getMovieCredits(id);
  return (
    <div className={styles.container}>
      {credits.map((credit) => (
        <div key={id} className={styles.credit}>
          {credit.profile_path ? (
            <img src={credit.profile_path} alt={credit.title} />
          ) : (
            <img className={styles.noImage} />
          )}
          <Link prefetch href={`/movies/${credit.id}`}>
            {skipNameView(credit.name)}
          </Link>
          <p>{credit.character}</p>
        </div>
      ))}
    </div>
  );
}
