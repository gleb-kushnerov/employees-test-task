import styles from './FilterBar.module.scss';
import { Search, Status } from './components';

export const FilterBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.line} />
      <Status />
    </div>
  );
};
