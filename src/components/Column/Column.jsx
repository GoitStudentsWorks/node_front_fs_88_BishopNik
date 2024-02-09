/** @format */

import React, { useState, useEffect } from 'react';

import {
  Wrapper,
  Title,
  IconsContainer,
  EditColumn,
  DelColumn,
  List,
} from './Column.styled';
import { useSelector, useDispatch } from 'react-redux';
import { cardsState } from 'redux/cards/selectors';
import { fetchCardsByColumnId } from 'redux/cards/operations';

import {
  Button,
  ButtonText,
  IconWrapper,
  AddIcon,
} from '../../components/Modal/CreateNewBoardModal/CreateNewBoardModal.styled';
import icon from 'components/Icon/icon-spraite.svg';

import { AddCardModal } from 'components/Modal';
import { Card } from 'components/Card/Card';
import { delColumn } from 'redux/columns/operations';

export const Column = ({ name, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cards = useSelector(cardsState);
  const dispatch = useDispatch();

  const cardForColumn = cards.filter(card => card.columnId === id);

  useEffect(() => {
    dispatch(fetchCardsByColumnId(id));
  }, [dispatch, id]);
  const handleDeleteColumn = columnId => {
    dispatch(delColumn(columnId));
  };

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

      {cardForColumn.map(item => (
        <Card key={item._id} item={item} />
      ))}
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
        onRequestClose={() => setIsOpen(false)}
        columnId={id}
      />
    </Wrapper>
  );
};
