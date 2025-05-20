'use client';

import { ChangeEventHandler } from 'react';
import { useUsersFiltersContext } from '@/hooks';
import { UserStatus } from '@/types';
import { options } from '@/constants';
import styles from './Status.module.scss';

const DEFAULT_VALUE = 'default';

export const Status = () => {
  const { dispatch } = useUsersFiltersContext();

  const changeHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    dispatch?.({
      type: 'SET_STATUS',
      payload: event.target.value === DEFAULT_VALUE ? null : (event.target.value as UserStatus),
    });
  };

  return (
    <select className={styles.select} defaultValue={DEFAULT_VALUE} onChange={changeHandler}>
      <option value={DEFAULT_VALUE}>Filter by status</option>
      {options.map(({ title, value }) => (
        <option key={value} value={value}>
          {title}
        </option>
      ))}
    </select>
  );
};
