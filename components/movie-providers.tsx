import { API_URL } from "../app/const";
import styles from "../styles/movie-providers.module.css";

async function getMovieProviders(id: string) {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
}

export default async function MovieProviders({ id }: { id: string }) {
  const providers = await getMovieProviders(id);
  console.log("providers", providers);
  if (providers && typeof providers === "object") {
    return (
      <div className={styles.container}>
        {Object.keys(providers).map((providerKey) => {
          const provider = providers[providerKey];
          return (
            <div className={styles.country}>
              <h1>{providerKey}</h1>
              <div key={providerKey} className={styles.provider}>
                <h3>{provider.provider_name}</h3>
                {/* Rendering 'buy' array */}
                {provider.buy && Array.isArray(provider.buy) && (
                  <div className={styles.wrapper}>
                    <h4>Buy</h4>
                    {provider.buy.map((item, index) => (
                      <div key={index} className={styles.method}>
                        <img src={item.logo_path} alt={`Logo ${index}`} />
                      </div>
                    ))}
                  </div>
                )}
                {/* Rendering 'rent' array */}
                {provider.rent && Array.isArray(provider.rent) && (
                  <div className={styles.wrapper}>
                    <h4>Rent</h4>
                    {provider.rent.map((item, index) => (
                      <div key={index} className={styles.method}>
                        <img src={item.logo_path} alt={`Logo ${index}`} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
