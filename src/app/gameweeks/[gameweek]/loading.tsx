import { soccerPitch } from "@lucide/lab";
import { CalendarDaysIcon, Icon } from "lucide-react";

import { cn } from "~/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

export default function GameweekLoading() {
  return (
    <>
      <div className="mb-5 mt-1">
        <div className="flex flex-row items-center">
          <CalendarDaysIcon
            className="mr-2.5 size-9 shrink-0"
            strokeWidth={2.5}
          />
          <h1 className="inline-flex items-center text-4xl font-bold">
            Gameweek <Skeleton className="ml-2 h-8 w-6" />
          </h1>
          <Skeleton className="ml-4 h-6 w-14 rounded-full" />
        </div>
        <div className="pt-2">
          <span className="inline-flex items-center font-light">
            Entry Deadline: <Skeleton className="ml-2 h-5 w-48" />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
        <Card className={cn("col-span-6 border")}>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-bold">
              <Icon iconNode={soccerPitch} className="mr-3 size-8" /> Fixtures
            </CardTitle>
            <CardContent className="px-0 pt-6">
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-semibold">
                  <Skeleton className="h-6 w-52" />
                </h3>
                <div className="space-y-3">
                  {Array.from({ length: 4 }, (_, index) => (
                    <Card key={index} className="w-full border">
                      <Skeleton className="h-12 w-full" />
                    </Card>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-semibold">
                  <Skeleton className="h-6 w-52" />
                </h3>
                <div className="space-y-3">
                  {Array.from({ length: 4 }, (_, index) => (
                    <Card key={index} className="w-full border">
                      <Skeleton className="h-12 w-full" />
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
        <Card className={`col-span-3 border`}>
          <CardHeader>
            <CardDescription>Work</CardDescription>
          </CardHeader>
        </Card>
        <Card className={`col-span-3 border`}>
          <CardHeader>
            <CardDescription>in</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
