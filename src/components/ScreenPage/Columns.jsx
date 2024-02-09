/** @format */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchColumnsByIdBoards } from 'redux/columns/operations';
import { columnsState } from 'redux/columns/selectors';
import { Column } from 'components/Column/Column';

export const Columns = ({ board }) => {
  const dispatch = useDispatch();

  const allColumns = useSelector(columnsState);

  useEffect(() => {
    dispatch(fetchColumnsByIdBoards(board));
  }, [dispatch, board]);

  console.log('allColumns', allColumns);

  return (
    <div>
      {allColumns.map(({ _id: id, name }) => (
        <Column name={name} id={id} key={id} />
      ))}
    </div>
  );
};
