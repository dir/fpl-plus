export type EntryPicksResponse = {
  active_chip: null;
  automatic_subs: unknown[];
  entry_history: Record<string, number>;
  picks: Pick[];
};

export type Pick = {
  element: number;
  position: number;
  multiplier: number;
  is_captain: boolean;
  is_vice_captain: boolean;
};
