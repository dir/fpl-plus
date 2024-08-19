import { CalendarDaysIcon } from "lucide-react";

import { Card, CardHeader } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

export default function GameweeksLoading() {
  return (
    <>
      <div className="mt-8 flex flex-row items-center pb-6">
        <CalendarDaysIcon
          className="mr-2.5 size-9 shrink-0"
          strokeWidth={2.5}
        />
        <h1 className="text-4xl font-bold">Gameweeks</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 38 }, (_, index) => (
          <Card key={index} className="border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-5 w-16" />
              </div>
              <Skeleton className="mt-2 h-4 w-32" />
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
}
