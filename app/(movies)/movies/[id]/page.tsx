export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return <div>clicked movie : {id}</div>;
}
