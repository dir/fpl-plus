export interface Root {
  picks: Pick[];
  picks_last_updated: string;
  chips: Chip[];
  transfers: Transfers;
}

export interface Pick {
  element: number;
  position: number;
  selling_price: number;
  multiplier: number;
  purchase_price: number;
  is_captain: boolean;
  is_vice_captain: boolean;
}

export interface Chip {
  status_for_entry: string;
  // TODO: fix
  played_by_entry: any[];
  name: string;
  number: number;
  start_event: number;
  stop_event: number;
  chip_type: string;
  is_pending: boolean;
}

export interface Transfers {
  cost: number;
  status: string;
  limit: number;
  made: number;
  bank: number;
  value: number;
}
