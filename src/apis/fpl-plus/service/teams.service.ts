import { fetchBootstrapStatic } from "~/apis/fpl/service/bootstrap.service";

import type { Team } from "~/apis/fpl/types/bootstrap.types";

export type TeamWithAdditionalProperties = Team & {
  crestImageUrl: string;
  fullName: string;
};

export const getTeamById = (id: number) => async () => {
  const bootstrap = await fetchBootstrapStatic()();

  const teamData = bootstrap.teams.find((team) => team.id === id);

  if (!teamData) {
    throw new Error(`Team with id ${id} not found`);
  }

  // Create a new object with the original team data and additional properties
  const team: TeamWithAdditionalProperties = {
    ...teamData,
    crestImageUrl: `/fpl/resources/badges/70/t${teamData.id}.png`,
    // Add more properties here as needed
    fullName: `${teamData.name}`,
  };

  return team;
};
