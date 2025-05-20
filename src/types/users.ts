import { ActionDispatch } from 'react';

export type UserStatus = 'Working' | 'OnVacation' | 'LunchTime' | 'BusinessTrip';

export interface User {
  id: number;
  name: string;
  status: UserStatus;
  img: string;
}

export interface UsersFilters {
  search: string | null;
  status: UserStatus | null;
}

export interface SearchAction {
  type: 'SET_SEARCH';
  payload: string;
}

export interface StatusAction {
  type: 'SET_STATUS';
  payload: UserStatus | null;
}

export type Action = SearchAction | StatusAction;

export interface UsersFiltersContextType {
  filters: UsersFilters | undefined;
  dispatch: ActionDispatch<[action: Action]> | undefined;
}

export interface UserOption {
  value: UserStatus;
  title: string;
}
