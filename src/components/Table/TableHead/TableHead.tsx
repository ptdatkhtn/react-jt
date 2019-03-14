import React, {ReactNode, AllHTMLAttributes} from 'react';

import TableContext from '../TableContext';

import styles from './TableHead.module.css';

export interface ITableHeadProps
  extends AllHTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

const contextValue = {variant: 'head'};

const TableHead = ({children}: ITableHeadProps) => {
  return (
    <TableContext.Provider value={contextValue}>
      <thead className={styles.tableHead}>{children}</thead>
    </TableContext.Provider>
  );
};

export default TableHead;
