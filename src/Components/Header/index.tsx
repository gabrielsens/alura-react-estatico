import { Outlet } from 'react-router-dom';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
            A Casa do codigo e da massa
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}
