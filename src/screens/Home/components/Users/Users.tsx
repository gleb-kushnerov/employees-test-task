'use client';

import { useGetUsers } from '@/api';
import { useUsersFiltersContext } from '@/hooks';
import { UserCard } from './components';
import { useFilterUsers } from './useFilterUsers';
import styles from './Users.module.scss';

const DEFAULT_CARDS_VALUE = 6;

export const Users = () => {
  const { data, isLoading } = useGetUsers();
  const { filters } = useUsersFiltersContext();
  const filteredUsers = useFilterUsers(data, filters);

  if (isLoading) {
    return (
      <div className={styles.wrapper}>
        {Array.from({ length: DEFAULT_CARDS_VALUE }).map((_, index) => (
          <div key={index} className={styles.loadingCard}></div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {filteredUsers?.map((user) => <UserCard user={user} key={user.id} />)}
    </div>
  );
};
