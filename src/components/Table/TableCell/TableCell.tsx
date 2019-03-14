import React, {ReactNode, AllHTMLAttributes} from 'react';

import TableContext from '../TableContext';
import Typo, {TypoVariants, TypoColors} from '../../Typo';

import styles from './TableCell.module.css';

export interface ITableCellProps
  extends AllHTMLAttributes<
    HTMLTableHeaderCellElement | HTMLTableDataCellElement
  > {
  children: ReactNode;
}

export interface ITableHeadCellProps
  extends AllHTMLAttributes<HTMLTableHeaderCellElement> {
  children: ReactNode;
}

export interface ITableBodyCellProps
  extends AllHTMLAttributes<HTMLTableDataCellElement> {
  children: ReactNode;
}

const TableHeadCell = ({children}: ITableHeadCellProps) => {
  return (
    <th className={styles.column}>
      <Typo variant={TypoVariants.body2} color={TypoColors.greyDark}>
        {children}
      </Typo>
    </th>
  );
};

const TableBodyCell = ({children}: ITableHeadCellProps) => {
  return <td className={styles.cell}>{children}</td>;
};

const TableCell = ({children}: ITableCellProps) => {
  return (
    <TableContext.Consumer>
      {(contextValue: {variant: string}) => {
        if ('head' === contextValue.variant) {
          return <TableHeadCell>{children}</TableHeadCell>;
        }

        return <TableBodyCell>{children}</TableBodyCell>;
      }}
    </TableContext.Consumer>
  );
};

export default TableCell;
