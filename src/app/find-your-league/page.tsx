import { ScanSearchIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function FindYourLeaguePage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle className="inline-flex items-center">
              Find your league <ScanSearchIcon className="ml-3" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <p>Enter your league code to find your league</p>
            </CardDescription>
          </CardContent>
          <CardFooter>
            <button className="btn btn-primary">Find League</button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
