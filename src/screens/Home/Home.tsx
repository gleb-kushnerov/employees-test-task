import { CreateUser, FilterBar, Users } from './components';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <CreateUser />
        <FilterBar />
      </header>
      <Users />
    </div>
  );
};
