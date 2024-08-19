"use client";

import { ColumnDef } from "@tanstack/react-table";
import { fetchLiveEventById } from "~/apis/fpl/service/event.service";
import { StandingWithEntryAndPicks } from "~/apis/fpl/types/league.types";
import { getLatestPointsForEvent } from "~/apis/fpl/types/src/points";
import ReactCountryFlag from "react-country-flag";

import Glow from "~/components/glow";

export const standingsColumns: ColumnDef<StandingWithEntryAndPicks>[] = [
  {
    accessorKey: "rank",
    header: () => "Rank",
    cell: ({ row }) => {
      const rank = row.original.standing.rank;
      // have to explicitly check each one so TypeScript can narrow the type of rank
      const placed = rank === 1 || rank === 2 || rank === 3;

      const placedVariants = {
        1: "gold",
        2: "silver",
        3: "bronze",
      } as const;

      return placed ? (
        <div className="select-none items-center text-xl font-black">
          <Glow color={placedVariants[rank]}>{rank}</Glow>
        </div>
      ) : (
        <div className="select-none text-xl font-bold">{rank}</div>
      );
    },
  },
  {
    accessorKey: "entry_name",
    header: "Team",
    cell: ({ row }) => {
      const rank = row.original.standing.rank;
      // have to explicitly check each one so TypeScript can narrow the type of rank
      const placed = rank === 1 || rank === 2 || rank === 3;

      const countryCodeIsoShort =
        row.original.entry?.player_region_iso_code_short === "EN"
          ? "GB"
          : row.original.entry?.player_region_iso_code_short;

      const placedVariants = {
        1: "gold",
        2: "silver",
        3: "bronze",
      } as const;

      return (
        <div className="flex flex-col">
          {placed ? (
            <Glow color={placedVariants[rank]} className="whitespace-nowrap">
              {row.original.standing.entry_name}
            </Glow>
          ) : (
            <span className="whitespace-nowrap font-bold">
              {row.original.standing.entry_name}
            </span>
          )}

          <div className="inline-flex items-center whitespace-nowrap">
            <ReactCountryFlag
              countryCode={countryCodeIsoShort ?? "GB"}
              svg
              style={{
                width: "1rem",
                height: "1rem",
              }}
              className="mr-1 rounded-sm"
            />
            {row.original.standing.player_name}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "event_total",
    header: "GW",
    cell: async ({ row }) => {
      const eventTotal = row.original.standing.event_total;
      const latestPoints = getLatestPointsForEvent({
        event: await fetchLiveEventById(1)(),
        picks: row.original.picks?.picks ?? [],
      });
      return (
        <div>
          <div className="text-xl font-bold">{latestPoints}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => {
      const total = row.original.standing.total;
      return <div className="text-xl font-bold">{total}</div>;
    },
  },
];
