import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delColumn, fetchColumnsByIdBoards } from 'redux/columns/operations';
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
// =======
// import {
//   ListColumn,
//   ListItem,
//   IconsContainer,
//   EditColumn,
//   DelColumn,
//   List,
//   Btn,
// } from './Columns.styled';
// import icon from 'components/Icon/icon-spraite.svg';

// export const Columns = ({ board }) => {
//   const dispatch = useDispatch();
//   const allColumns = useSelector(columnsState);

//   useEffect(() => {
//     dispatch(fetchColumnsByIdBoards(board));
//   }, [dispatch, board]);

//   const handleDeleteColumn = columnId => {
//     dispatch(delColumn(columnId));
//   };

//   return (
//     <ListColumn>
//       <List>
//         {allColumns.map(({ _id: id, name }) => (
//           <ListItem key={id}>
//             {name}
//             <IconsContainer>
//               <EditColumn type="button" width="16" height="16">
//                 <use xlinkHref={`${icon}#icon-edit`} />
//               </EditColumn>
//               <DelColumn
//                 type="button"
//                 width="16"
//                 height="16"
//                 onClick={() => handleDeleteColumn(id)}
//               >
//                 <use xlinkHref={`${icon}#icon-delete`} />
//               </DelColumn>
//             </IconsContainer>
//           </ListItem>
//         ))}
//       </List>
//       <Btn>Add another card</Btn>
//     </ListColumn>
// >>>>>>> main
  );
};
