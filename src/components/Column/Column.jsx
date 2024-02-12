/** @format */

import React, { useContext, useState, useEffect, useMemo } from 'react';

import {
	Wrapper,
	Title,
	IconsContainer,
	EditColumn,
	DelColumn,
	List,
	ListTasks,
	ListTasksContainer,
} from './Column.styled';
import { useDispatch } from 'react-redux';
import { fetchCardsByColumnId } from 'redux/cards/operations';

import {
	Button,
	ButtonText,
	IconWrapper,
	AddIcon,
} from 'components/Modal/CreateNewBoardModal/CreateNewBoardModal.styled';

import { AddCardModal } from 'components/Modal';
import { Card } from 'components/Card/Card';
import { delColumn } from 'redux/columns/operations';
import { MainContext } from 'components/Helpers';
import { delCard } from 'redux/cards/operations';
import { useCards } from 'hooks';

export const Column = ({ columnData }) => {
	const { name, _id } = columnData;
	// const [uniqueData, setUniqueData] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [cardForEditing, setCardForEditing] = useState(null);
	const { allCards } = useCards();
	const dispatch = useDispatch();
	const { filter } = useContext(MainContext);
	const [cards, setCards] = useState([]);

	useEffect(() => {
		dispatch(fetchCardsByColumnId(_id));
	}, [dispatch, _id]);

	const handleDeleteColumn = columnId => {
		dispatch(delColumn(columnId));
	};

	const deleteCard = id => {
		dispatch(delCard({ id, _id }));
	};

	const editCard = data => {
		setCardForEditing(data);
		setIsOpen(true);
	};

	const onRequestClose = () => {
		setCardForEditing(null);
		setIsOpen(false);
	};

	// useEffect(() => {
	// 	const uniqueItems = Array.from(new Set(allCards.map(item => item._id))).map(id =>
	// 		allCards.find(item => item._id === id)
	// 	);
	// 	setUniqueData(uniqueItems);
	// }, [allCards]);

	const memoizedCards = useMemo(() => {
		if (_id && _id in allCards) {
			const cardForColumn = allCards[_id]?.filter(card => {
				if (filter === 'all') {
					return card.columnId === _id;
				} else {
					return card.columnId === _id && card.priority === filter;
				}
			});
			return cardForColumn;
		}
		return [];
	}, [_id, allCards, filter]);

	useEffect(() => {
		setCards(memoizedCards);
	}, [memoizedCards]);

	return (
		<Wrapper>
			<List>
				<Title>
					{name}
					<IconsContainer>
						<EditColumn type='button' width='16' height='16' name='edit' />

						<DelColumn
							type='button'
							width='16'
							height='16'
							onClick={() => handleDeleteColumn(_id)}
							name='delete'
						/>
					</IconsContainer>
				</Title>
			</List>
			<ListTasksContainer>
				<ListTasks>
					{cards
						?.map(item => (
							<Card
								key={item._id}
								item={item}
								deleteCard={() => deleteCard(item?._id)}
								editCard={() => editCard(item)}
							/>
						))
						.reverse()}
				</ListTasks>
			</ListTasksContainer>
			<Button style={{ width: '334px' }} type='button' onClick={() => setIsOpen(true)}>
				<IconWrapper>
					<AddIcon name='add-board' />
				</IconWrapper>
				<ButtonText>{!cards?.length ? 'Add card' : 'Add another card'}</ButtonText>
			</Button>
			<AddCardModal
				isOpen={isOpen}
				onRequestClose={onRequestClose}
				columnId={_id}
				cardForEditing={cardForEditing}
			/>
		</Wrapper>
	);
};
