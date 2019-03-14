import React, {ReactNode, AllHTMLAttributes} from 'react';

import TableContext from '../TableContext';

import styles from './TableBody.module.css';

export interface ITableBodyProps
  extends AllHTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

const contextValue = {variant: 'body'};

const TableBody = ({children}: ITableBodyProps) => {
  return (
    <TableContext.Provider value={contextValue}>
      <tbody className={styles.tableBody}>{children}</tbody>
    </TableContext.Provider>
  );
};

export default TableBody;
