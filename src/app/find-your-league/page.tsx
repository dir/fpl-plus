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
    <div className="mx-auto mt-8 flex w-full max-w-screen-md flex-col items-center gap-y-8 bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex text-2xl">
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
            <CircleHelpIcon className="mr-2" /> How to get your league code
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6 md:flex-row">
          <div className="flex aspect-video w-full items-center justify-center md:w-1/2">
            {/* Replace this div with your GIF */}
            <Image
              unoptimized
              src="/howToCode.gif"
              width="500"
              height="500"
              alt="GIF placeholder"
            />
          </div>
          <CardDescription className="w-full md:w-1/2">
            <ol className="list-inside list-decimal space-y-2">
              <li>Open your browser of choice</li>
              <li>
                Navigate to{" "}
                <Link
                  href="https://fantasy.premierleague.com/leagues"
                  target="_blank"
                  className="font-medium text-green-500"
                >
                  your leagues
                </Link>
              </li>
              <li>Click on the league you&apos;d like to view</li>
              <li>Copy the numbers from the URL</li>
            </ol>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
