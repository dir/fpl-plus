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
