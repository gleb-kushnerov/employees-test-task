import { PropsWithChildren } from 'react';
import Link from 'next/link';

import styles from './MainLayout.module.scss';
import { URLS } from '@/constants';
import { Button } from '@/components';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <header className={styles.header}>
        <Link href={URLS.HOME} className={styles.logo}>
          Employees
        </Link>
        <Button variant="outline" size="m" type="button">
          Log Out
        </Button>
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
};
