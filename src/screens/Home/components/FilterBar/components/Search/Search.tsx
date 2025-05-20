'use client';

import styles from './Search.module.scss';
import { ChangeEventHandler, useState } from 'react';
import { useUsersFiltersContext } from '@/hooks';

export const Search = () => {
  const [value, setValue] = useState('');
  const { dispatch } = useUsersFiltersContext();

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputValue = event.target.value;

    if (/^[a-zA-Z\s]*$/.test(inputValue)) {
      dispatch?.({ type: 'SET_SEARCH', payload: inputValue });
      setValue(inputValue);
    }
  };

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Type to search"
      onChange={changeHandler}
      value={value}
    />
  );
};
