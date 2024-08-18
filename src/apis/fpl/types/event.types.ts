export type EventResponse = {
  elements: PlayerElement[];
};

export type PlayerElement = {
  id: number;
  stats: Stats;
  explain: Explain[];
};

export type Explain = {
  fixture: number;
  stats: Stat[];
};

export type Stat = {
  identifier: Identifier;
  points: number;
  value: number;
};

export type Identifier =
  | "minutes"
  | "yellow_cards"
  | "clean_sheets"
  | "goals_scored"
  | "assists"
  | "bonus"
  | "saves"
  | "own_goals"
  | "goals_conceded"
  | "red_cards";

export type Stats = {
  minutes: number;
  goals_scored: number;
  assists: number;
  clean_sheets: number;
  goals_conceded: number;
  own_goals: number;
  penalties_saved: number;
  penalties_missed: number;
  yellow_cards: number;
  red_cards: number;
  saves: number;
  bonus: number;
  bps: number;
  influence: string;
  creativity: string;
  threat: string;
  ict_index: string;
  starts: number;
  expected_goals: string;
  expected_assists: string;
  expected_goal_involvements: string;
  expected_goals_conceded: string;
  total_points: number;
  in_dreamteam: boolean;
};

export type EventInfo = {
  id: number;
  name: string;
  deadline_time: string;
  release_time: null;
  average_entry_score: number;
  finished: boolean;
  data_checked: boolean;
  highest_scoring_entry: number | null;
  deadline_time_epoch: number;
  deadline_time_game_offset: number;
  highest_score: number | null;
  is_previous: boolean;
  is_current: boolean;
  is_next: boolean;
  cup_leagues_created: boolean;
  h2h_ko_matches_created: boolean;
  ranked_count: number;
  chip_plays: ChipPlay[];
  most_selected: number | null;
  most_transferred_in: number | null;
  top_element: number | null;
  top_element_info: TopElementInfo | null;
  transfers_made: number;
  most_captained: number | null;
  most_vice_captained: number | null;
};

export type ChipPlay = {
  chip_name: string;
  num_played: number;
};

export type TopElementInfo = {
  id: number;
  points: number;
};
