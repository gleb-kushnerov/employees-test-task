import { UsersFilters, User } from '@/types';
import { useMemo } from 'react';

export const useFilterUsers = (data: User[] | undefined, filters: UsersFilters | undefined) => {
  return useMemo(() => {
    if (!data || !filters) {
      return undefined;
    }

    let result = [...data];

    if (filters.status) {
      result = result.filter((user) => user.status === filters.status);
    }

    if (filters.search) {
      result = result.filter((user) =>
        user.name.toLowerCase().includes((filters.search || '').toLowerCase()),
      );
    }

    return result;
  }, [data, filters]);
};
