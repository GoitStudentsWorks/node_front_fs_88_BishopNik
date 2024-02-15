/** @format */

import React, { useContext } from 'react';
import { StyleSheetManager } from 'styled-components';
import {
	BoardContainer,
	BtnAddColumn,
	SvagAddColumn,
	StyledIconAdd,
	WrapperBoardContainer,
} from './MainDashboard.styled';
import { AddColumnModal } from 'components/Modal';
import { Columns } from '../Columns';
import { useParams } from 'react-router-dom';
import { MainContext } from 'components/Helpers';
import { useColumns, useBoards } from 'hooks';

const MainDashboard = () => {
	const { setIsOpenAddColumn } = useContext(MainContext);
	const { board } = useParams();
	const { allColumns } = useColumns();
	const { allBoards } = useBoards();
	const selectedBoard = allBoards.find(item => item._id === board);

	return (
		<StyleSheetManager shouldForwardProp={prop => prop !== 'backgroundId'}>
			<WrapperBoardContainer>
				<BoardContainer backgroundId={selectedBoard?.background}>
					<Columns board={board}>
						<BtnAddColumn type='button' onClick={() => setIsOpenAddColumn(true)}>
							<StyledIconAdd>
								<SvagAddColumn name='plus' />
							</StyledIconAdd>
							<span>Add {allColumns.length ? 'another' : null} column</span>
						</BtnAddColumn>
					</Columns>
					<AddColumnModal board={board} />
				</BoardContainer>
			</WrapperBoardContainer>
		</StyleSheetManager>
	);
};

export default MainDashboard;
