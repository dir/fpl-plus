import { fplApi } from "~/apis/fpl/service/client";
import { EntryResponse } from "~/apis/fpl/types/entry.types";

export const fetchEntryById = (id: number) => async () =>
  await fplApi.get(`entry/${id}`).json<EntryResponse>();
