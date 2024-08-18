interface IElementStatInfo {
  per90Stat: string;
  shortName: string;
}

const elementStats: Record<string, IElementStatInfo | undefined> = {
  starts: {
    shortName: "ST",
    per90Stat: "starts_per_90",
  },
  minutes: {
    shortName: "MP",
    per90Stat: "",
  },
  goals_scored: {
    shortName: "GS",
    per90Stat: "",
  },
  assists: {
    shortName: "A",
    per90Stat: "",
  },
  expected_goals: {
    shortName: "xG",
    per90Stat: "expected_goals_per_90",
  },
  expected_assists: {
    shortName: "xA",
    per90Stat: "expected_assists_per_90",
  },
  expected_goal_involvements: {
    shortName: "xGI",
    per90Stat: "expected_goal_involvements_per_90",
  },
  clean_sheets: {
    shortName: "",
    per90Stat: "clean_sheets_per_90",
  },
  goals_conceded: {
    shortName: "",
    per90Stat: "goals_conceded_per_90",
  },
  expected_goals_conceded: {
    shortName: "xGC",
    per90Stat: "expected_goals_conceded_per_90",
  },
  own_goals: {
    shortName: "",
    per90Stat: "",
  },
  penalties_saved: {
    shortName: "",
    per90Stat: "",
  },
  penalties_missed: {
    shortName: "",
    per90Stat: "",
  },
  yellow_cards: {
    shortName: "",
    per90Stat: "",
  },
  red_cards: {
    shortName: "",
    per90Stat: "",
  },
  saves: {
    shortName: "",
    per90Stat: "saves_per_90",
  },
  bonus: {
    shortName: "BP",
    per90Stat: "",
  },
  bps: {
    shortName: "",
    per90Stat: "",
  },
  influence: {
    shortName: "",
    per90Stat: "",
  },
  creativity: {
    shortName: "",
    per90Stat: "",
  },
  threat: {
    shortName: "",
    per90Stat: "",
  },
  ict_index: {
    shortName: "",
    per90Stat: "",
  },
};

export const getElementStat = (name: string) => elementStats[name] ?? null;

export const getElementStatNames = () => Object.keys(elementStats);

export const getStatAbbr = (
  name: string,
  statsByName: Record<string, IElementStatInfo>,
) => {
  const stat = statsByName[name];
  return stat ? stat.shortName : "";
};
