/** @format */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchColumnsByIdBoards } from 'redux/columns/operations';
import { columnsState } from 'redux/columns/selectors';
import { Column } from 'components/Column/Column';
import { Styled } from './Columns.styled';

export const Columns = ({ board }) => {
  const dispatch = useDispatch();

	const allColumns = useSelector(columnsState);
	
	console.log(allColumns);
	
  useEffect(() => {
    dispatch(fetchColumnsByIdBoards(board));
  }, [dispatch, board]);

  return (
    <Styled>
      {allColumns.map((item) => (
        <Column name={item.name} id={item._id} key={item._id} column={item}  />
      ))}
    </Styled>
  );
};
