import { CircleHelpIcon, ScanSearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { LeagueSearchForm } from "~/app/find-your-league/input";

export default function FindYourLeaguePage() {
  return (
    <div className="mx-auto mt-8 flex w-full max-w-screen-md flex-col items-center gap-y-6 bg-background px-4 md:gap-y-8">
      <Card className="w-full max-w-md">
        <CardHeader className="pb-4">
          <CardTitle className="inline-flex items-center text-2xl">
            Find your league <ScanSearchIcon className="ml-3" />
          </CardTitle>
          <CardDescription>
            Enter your league code to find your league
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LeagueSearchForm />
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <CircleHelpIcon className="mr-2" /> Get your league code
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-3.5 md:flex-row md:gap-6">
          <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border-2 border-green-500 border-muted md:w-1/2">
            <Image
              unoptimized
              src="/howToCode.gif"
              width="500"
              height="500"
              alt="GIF placeholder"
            />
          </div>
          <div className="w-full md:w-1/2">
            <ol className="list-inside list-decimal space-y-2 text-sm marker:font-medium marker:text-green-500">
              <li>Open your browser of choice</li>
              <li>
                Navigate to{" "}
                <Link
                  href="https://fantasy.premierleague.com/leagues"
                  target="_blank"
                  className="font-medium text-green-500 transition-colors hover:text-green-400"
                >
                  your leagues
                </Link>
              </li>
              <li>Click on the league you&apos;d like to view</li>
              <li>Copy the numbers from the URL</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
