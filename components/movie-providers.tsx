import { API_URL } from "../app/const";

async function getMovieProviders(id: string) {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
}

export default async function MovieProviders({ id }: { id: string }) {
  const providers = await getMovieProviders(id);
  console.log(providers);
  return <div>providers</div>;
}
