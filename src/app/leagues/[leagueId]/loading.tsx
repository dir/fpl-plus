import { TrophyIcon } from "lucide-react";

import { Skeleton } from "~/components/ui/skeleton";
import { TableSkeleton } from "~/components/ui/table-skeleton";

export default function Loading() {
  return (
    <div className="mt-8 flex flex-col gap-y-6">
      <div className="flex flex-row items-center">
        <TrophyIcon className="mr-2.5 size-9 shrink-0" strokeWidth={2.5} />
        <Skeleton className="h-10 w-40" />
      </div>

      <TableSkeleton
        columnCount={4}
        showViewOptions={false}
        withPagination={false}
        cellWidths={["16.7%", "50%", "16.7%", "16.7%"]}
      />
    </div>
  );
}
