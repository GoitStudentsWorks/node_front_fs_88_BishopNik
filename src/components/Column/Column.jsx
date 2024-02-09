import React, { useState, useEffect } from 'react';

import { Wrapper, Title } from './Column.styled';
import { useSelector, useDispatch } from 'react-redux';
import { cardsState } from 'redux/cards/selectors';
import { fetchCardsByColumnId } from 'redux/cards/operations';

import {
  Button,
  ButtonText,
  IconWrapper,
  AddIcon,
} from '../../components/Modal/CreateNewBoardModal/CreateNewBoardModal.styled';

import { AddCardModal } from 'components/Modal';
import { Card } from 'components/Card/Card';

export const Column = ({ name, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cards = useSelector(cardsState);
  const dispatch = useDispatch();

  const cardForColumn = cards.filter(card => card.columnId === id);

  useEffect(() => {
    dispatch(fetchCardsByColumnId(id));
  }, [id]);

  return (
    <Wrapper>
      <Title>{name}</Title>
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
