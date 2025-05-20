import { useContext } from 'react';
import { UsersFiltersContext } from '@/providers';

export const useUsersFiltersContext = () => {
  const context = useContext(UsersFiltersContext);

  if (!context) {
    throw new Error('The App Context must be used within an AppContextProvider');
  }

  return context;
};
