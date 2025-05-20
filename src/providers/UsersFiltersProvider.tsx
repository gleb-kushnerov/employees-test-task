'use client';

import { createContext, PropsWithChildren, useReducer } from 'react';
import { Action, UsersFilters, UsersFiltersContextType } from '@/types';

export const UsersFiltersContext = createContext<UsersFiltersContextType>({
  filters: undefined,
  dispatch: undefined,
});

const reducer = (state: UsersFilters, action: Action) => {
  switch (action.type) {
    case 'SET_SEARCH': {
      return {
        ...state,
        search: action.payload,
      };
    }
    case 'SET_STATUS': {
      return {
        ...state,
        status: action.payload,
      };
    }
  }
};

export const UsersFiltersProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, { search: null, status: null });

  return (
    <UsersFiltersContext.Provider value={{ filters: state, dispatch }}>
      {children}
    </UsersFiltersContext.Provider>
  );
};
