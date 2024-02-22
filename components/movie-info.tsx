import { API_URL } from "../app/const";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  const genres = [];
  movie.genres.map((genre) => genres.push(genre.name));
  const productions = [];
  movie.production_companies.map((company) =>
    productions.push([company.logo_path, company.name])
  );
  console.log(productions);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1>{movie.title}</h1>
        <div>
          {genres.map((genre) => (
            <h3>{genre}</h3>
          ))}
        </div>
        <h3>
          ⭐️ {movie.vote_average.toFixed(1)} &nbsp; &nbsp; ⏱️ {movie.runtime}
          min
        </h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          🔗 Official Website
        </a>
        <details>
          <summary>Productions</summary>
          <ul className={styles.company}>
            {productions.map((company) => (
              <li>
                <img src={company[0]} />
                <p>{company[1]}</p>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </div>
  );
}
