export default function LeaguePage({
  params,
}: {
  params: {
    leagueId: string;
  };
}) {
  return (
    <div>
      <h1>League {params.leagueId}</h1>
    </div>
  );
}
