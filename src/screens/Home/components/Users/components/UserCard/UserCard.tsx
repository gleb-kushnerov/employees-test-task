import styles from './UserCard.module.scss';
import { User, UserStatus } from '@/types';
import Image from 'next/image';
import classNames from 'classnames';
import { options } from '@/constants';
import { Select } from '@/components';
import { ChangeEventHandler, useState } from 'react';
import { useUpdateUserStatus } from '@/api';

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  const [value, setValue] = useState(user.status);
  const { mutate } = useUpdateUserStatus();

  const changeHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setValue(event.target.value as UserStatus);
    mutate({ id: user.id, status: event.target.value as UserStatus });
  };

  return (
    <div key={user.id} className={styles.card}>
      <Image className={styles.image} src={user.img} width={150} height={150} alt={user.name} />
      <div className={styles.info}>
        <p className={styles.userName}>{user.name}</p>
        <div className={styles.selectWrapper}>
          <span className={classNames(styles.tag, styles[value])}></span>
          <Select className={styles.select} value={value} onChange={changeHandler}>
            <option value="default">Filter by status</option>
            {options.map(({ title, value }) => (
              <option key={value} value={value}>
                {title}
              </option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
};
