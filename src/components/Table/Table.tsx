import React, {ReactNode} from 'react';

import styles from './Table.module.css';

export interface ITableProps {
  children: ReactNode;
}

const Table = ({children}: ITableProps) => {
  return (
    <div className={styles.table}>
      <table className={styles.container}>{children}</table>
    </div>
  );
};

export default Table;
