import styles from './CreateUserModal.module.scss';
import { options } from '@/constants';
import { Button, Select } from '@/components';

interface CreateUserModalProps {
  onClose: () => void;
}

export const CreateUserModal = ({ onClose }: CreateUserModalProps) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h2 className={styles.heading}>Create new user</h2>
      </header>
      <form className={styles.form}>
        <label className={styles.label}>
          <p className={styles.labelTitle}>User name:</p>
          <input className={styles.input} type="text" />
        </label>
        <label className={styles.label}>
          <p className={styles.labelTitle}>User name:</p>
          <Select className={styles.select} defaultValue="default">
            <option value="default">Filter by status</option>
            {options.map(({ title, value }) => (
              <option key={value} value={value}>
                {title}
              </option>
            ))}
          </Select>
        </label>
        <div className={styles.buttons}>
          <Button size="m" type="button" onClick={onClose}>
            Create
          </Button>
          <Button size="m" variant="secondary" type="button" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
