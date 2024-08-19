"use client";

import { MoveLeft, SearchXIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function LeagueNotFound() {
  const params = useParams();

  return (
    <div className="mt-8 flex w-full justify-center">
      <Card>
        <CardHeader>
          <CardTitle className="inline-flex items-center">
            League Not Found <SearchXIcon className="ml-2 size-8 shrink-0" />
          </CardTitle>
          <div>
            Requested ID:{" "}
            <code className="font-semibold">{params.leagueId}</code>
          </div>
        </CardHeader>
        <CardContent>
          <p>Couldn&apos;t find the classic league you were looking for</p>
          <Link href="/find-your-league" className="select-none">
            <div className="mt-6 inline-flex items-center text-sm text-green-500 transition-colors hover:text-green-400">
              <MoveLeft className="mr-2" />
              Go Back
            </div>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
