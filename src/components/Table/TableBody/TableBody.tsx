import React, {ReactNode, AllHTMLAttributes} from 'react';

import TableContext from '../TableContext';

import styles from './TableBody.module.css';
import clsx from 'clsx';

export interface ITableBodyProps
  extends AllHTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
  className: string;
}

const contextValue = {variant: 'body'};

const TableBody = ({children, className, ...others}: ITableBodyProps) => {
  return (
    <TableContext.Provider value={contextValue}>
      <tbody className={clsx(styles.tableBody, className)} {...others}>
        {children}
      </tbody>
    </TableContext.Provider>
  );
};

export default TableBody;
