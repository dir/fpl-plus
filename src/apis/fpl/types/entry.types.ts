export type EntryResponse = {
  id: number;
  joined_time: Date;
  started_event: number;
  favourite_team: number;
  player_first_name: string;
  player_last_name: string;
  player_region_id: number;
  player_region_name: string;
  player_region_iso_code_short: string;
  player_region_iso_code_long: string;
  years_active: number;
  summary_overall_points: number;
  summary_overall_rank: number;
  summary_event_points: number;
  summary_event_rank: number;
  current_event: number;
  leagues: EntryLeagues;
  name: string;
  name_change_blocked: boolean;
  entered_events: number[];
  kit: null;
  last_deadline_bank: number;
  last_deadline_value: number;
  last_deadline_total_transfers: number;
};

export type EntryLeagues = {
  classic: EntryClassicLeague[];
  h2h: unknown[]; // not sure what this is
  cup: Cup;
  cup_matches: unknown[]; // not sure what this is
};

export type EntryClassicLeague = {
  id: number;
  name: string;
  short_name: null | string;
  created: Date;
  closed: boolean;
  rank: null;
  max_entries: null;
  league_type: string;
  scoring: string;
  admin_entry: number | null;
  start_event: number;
  entry_can_leave: boolean;
  entry_can_admin: boolean;
  entry_can_invite: boolean;
  has_cup: boolean;
  cup_league: null;
  cup_qualified: null;
  rank_count: number | null;
  entry_percentile_rank: number | null;
  active_phases: ActivePhase[];
  entry_rank: number;
  entry_last_rank: number;
};

export type ActivePhase = {
  phase: number;
  rank: number;
  last_rank: number;
  rank_sort: number;
  total: number;
  league_id: number;
  rank_count: number | null;
  entry_percentile_rank: number | null;
};

export type Cup = {
  matches: any[];
  status: Status;
  cup_league: null;
};

export type Status = {
  qualification_event: null;
  qualification_numbers: null;
  qualification_rank: null;
  qualification_state: null;
};
