/**
 * Types for /api/leagues-classic/{leagueId} endpoint
 */

import { EntryResponse } from "~/apis/fpl/types/entry.types";
import { EntryPicksResponse } from "~/apis/fpl/types/picks.types";

export type LeagueStandingsResponse = {
  new_entries: NewEntries;
  last_updated_data: Date;
  league: League;
  standings: Standings;
};

export type Pagination = {
  has_next: boolean;
  page: number;
};

export type NewEntries = Pagination & {
  results: unknown[]; // not sure what this is
};

export type Standings = Pagination & {
  results: LeagueEntry[];
};

export type League = {
  id: number;
  name: string;
  created: Date;
  closed: boolean;
  max_entries: null;
  league_type: string; // need to figure out what these are/can be
  scoring: string; // need to figure out what these are/can be
  admin_entry: number;
  start_event: number;
  code_privacy: string;
  has_cup: boolean;
  cup_league: null;
  rank: null;
};

export type LeagueEntry = {
  id: number;
  event_total: number;
  player_name: string;
  rank: number;
  last_rank: number;
  rank_sort: number;
  total: number;
  entry: number;
  entry_name: string;
};

export type StandingWithEntryAndPicks = {
  standing: LeagueEntry;
  entry: EntryResponse | undefined;
  picks: EntryPicksResponse | undefined;
};
