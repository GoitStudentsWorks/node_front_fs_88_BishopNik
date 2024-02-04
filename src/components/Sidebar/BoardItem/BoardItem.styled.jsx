import styled from 'styled-components';
import Icon from '../../Icon/index';

export const BoardContainer = styled.div`
  display: flex;
  align-items: center;
  border: none;
  padding-left: 14px;
  background-color: rgba(31, 31, 31, 1);

  @media screen and (min-width: 375px) {
    width: 225px;
    height: 61px;
  }

  @media screen and (min-width: 768px) {
    width: 260px;
    height: 61px;
    padding-left: 24px;
  }
`;

export const BoardNameContainer = styled.div`
  width: 114px;
  display: flex;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const BoardIcon = styled.div`
  width: 18px;
  height: 18px;
  background-color: red;
`;

export const BoardText = styled.p`
  font-size: 14px;
  letter-spacing: -0.2px;
  color: rgba(255, 255, 255, 1);
  margin: 0px;
`;

export const IconsContainer = styled.div`
  width: 40px;
  height: 16px;
  margin-left: auto;
  display: flex;
  gap: 8px;
`;

export const EditIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  stroke: rgba(255, 255, 255, 0.5);

  &:hover,
  &:focus {
    stroke: rgba(190, 219, 176, 1);
  }
`;

export const DelIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  stroke: rgba(255, 255, 255, 0.5);

  &:hover,
  &:focus {
    stroke: rgba(190, 219, 176, 1);
  }
`;

export const BoardLine = styled.p`
  width: 4px;
  height: 61px;
  margin: 0;
  margin-left: 18px;
  background-color: rgba(190, 219, 176, 1);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
`;
