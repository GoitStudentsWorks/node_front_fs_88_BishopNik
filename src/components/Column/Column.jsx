/** @format */

import React, { useContext, useState, useEffect } from 'react';

import {
  Wrapper,
  Title,
  IconsContainer,
  EditColumn,
  DelColumn,
  List,
  ListTasks,
} from './Column.styled';
import { useSelector, useDispatch } from 'react-redux';
import { cardsState } from 'redux/cards/selectors';
import { fetchCardsByColumnId } from 'redux/cards/operations';

import {
  Button,
  ButtonText,
  IconWrapper,
  AddIcon,
} from 'components/Modal/CreateNewBoardModal/CreateNewBoardModal.styled';
import icon from 'components/Icon/icon-spraite.svg';

import { AddCardModal } from 'components/Modal';
import { Card } from 'components/Card/Card';
import { delColumn } from 'redux/columns/operations';
import { MainContext } from 'components/Helpers';
import { delCard } from 'redux/cards/operations';

export const Column = ({ name, id, column }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cardForEditing, setCardForEditing] = useState(null);
  const cards = useSelector(cardsState);
  const dispatch = useDispatch();
  const { filter } = useContext(MainContext);

  useEffect(() => {
    dispatch(fetchCardsByColumnId(id));
  }, [dispatch, id]);

  const handleDeleteColumn = columnId => {
    dispatch(delColumn(columnId));
  };

  const deleteCard = id => {
    dispatch(delCard(id));
  };

  const editCard = data => {
    setCardForEditing(data);
    setIsOpen(true);
  };

  const onRequestClose = () => {
    setCardForEditing(null);
    setIsOpen(false);
  };

  const cardForColumn = cards.filter(
    card => card.columnId === id && card.priority === filter
  );

  return (
    <Wrapper>
      <List>
        <Title>
          {name}
          <IconsContainer>
            <EditColumn type="button" width="16" height="16">
              <use xlinkHref={`${icon}#icon-edit`} />
            </EditColumn>
            <DelColumn
              type="button"
              width="16"
              height="16"
              onClick={() => handleDeleteColumn(id)}
            >
              <use xlinkHref={`${icon}#icon-delete`} />
            </DelColumn>
          </IconsContainer>
        </Title>
      </List>
      <ListTasks>
        {cards.slice(0, 4).map(item => (
          <Card
            key={item._id}
            item={item}
            deleteCard={() => deleteCard(item?._id)}
            editCard={() => editCard(item)}
          />
        ))}
      </ListTasks>
      <Button type="button" onClick={() => setIsOpen(true)}>
        <IconWrapper>
          <AddIcon name="add-board" />
        </IconWrapper>
        <ButtonText>
          {!cardForColumn.length ? 'Add card' : 'Add another card'}
        </ButtonText>
      </Button>

      <AddCardModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        columnId={column._id}
        cardForEditing={cardForEditing}
      
      />
    </Wrapper>
  );
};
