import React, {ReactNode, AllHTMLAttributes} from 'react';

export interface ITableRowProps extends AllHTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
}

const TableRow = ({children}: ITableRowProps) => {
  return <tr>{children}</tr>;
};

export default TableRow;
