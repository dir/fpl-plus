import { MoveLeft } from "lucide-react";
import Link from "next/link";

export function generateMetadata({
  params,
}: {
  params: {
    gameweek: string;
  };
}) {
  return {
    title: "Gameweek " + params.gameweek,
  };
}

export default function GameweekLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mt-5">
        <Link href="/gameweeks" className="select-none">
          <div className="inline-flex items-center text-sm text-muted-foreground/60 transition-colors hover:text-muted-foreground">
            <MoveLeft className="mr-2" />
            View All
          </div>
        </Link>
      </div>

      {children}
    </>
  );
}
