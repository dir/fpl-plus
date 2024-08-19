import { SearchXIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function NotFound() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="inline-flex items-center">
          Page Not Found <SearchXIcon className="ml-2 size-7 shrink-0" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          Sorry, the page you are looking for does not exist. Status:{" "}
          <code>404</code>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
