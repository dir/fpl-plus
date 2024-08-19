"use client";

import { SearchXIcon } from "lucide-react";
import { useParams } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function LeagueNotFound() {
  const params = useParams();

  return (
    <div className="flex w-full justify-center">
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
        </CardContent>
      </Card>
    </div>
  );
}
