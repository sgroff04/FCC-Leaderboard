import React from 'react';
import { Cell } from 'fixed-data-table';
import 'fixed-data-table/dist/fixed-data-table.css';

const RecentPoints = ({ rowIndex, data, field, ...props }) => (
  <Cell { ...props }>
    { data[rowIndex][field]}
  </Cell>
);

export default RecentPoints;