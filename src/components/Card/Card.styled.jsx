/** @format */

import styled from 'styled-components';
import Icon from '../Icon';

export const CardContainer = styled.div`
  width: 334px;
  max-width: 98vw;
  height: 154px;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.profile.background};
  border-radius: 7px;
  overflow: hidden;
`;

export const PriorityLine = styled.div`
  width: 4px;
`;

export const CardContent = styled.div`
  width: 331px;
  padding: 14px 20px 14px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextContent = styled.div``;

export const Title = styled.h4`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.02em;
  color: ${props => props.theme.help.modalTextMain};
  margin: 0;
`;

export const DescriptionText = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.02em;
  line-height: 1.45;
  color: ${props => props.theme.colum.textSecondary};
  margin-top: 8px;
  width: 290px;
  height: 38px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  border-top: solid 1px ${props => props.theme.colum.borderColor};
  height: 45px;
  align-items: flex-end;
`;

export const Priority = styled.div`
  height: 31px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
`;

export const InfoTitle = styled.p`
  font-size: 8px;
  margin: 0;
  font-weight: normal;
  letter-spacing: -0.02em;
  cursor: default;
  color: ${props => props.theme.colum.icon};
`;

export const PriorityLevel = styled.p`
  position: relative;
  font-size: 10px;
  margin: 0;
  font-weight: normal;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colum.textMain};
  padding-left: 16px;
  cursor: default;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props => props.color};
  }
`;

export const Dedline = styled.div`
  height: 31px;
  margin-left: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
`;

export const Date = styled.p`
  font-size: 10px;
  margin: 0;
  font-weight: normal;
  letter-spacing: -0.02em;
  cursor: default;
  color: ${props => props.theme.colum.textMain};
`;

export const BellIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  margin-left: auto;
  stroke: ${props =>
    props.active ? props.theme.colum.buttonBackground : 'transparent'};
  cursor: pointer;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 13px;
  

   &:hover,
  &:focus {
    stroke:  ${props => props.theme.colum.buttonBackground};
`;

export const MoveIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  stroke: ${props => props.theme.colum.icon};
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: ${props => props.theme.colum.buttonBackground};
  }
`;

export const EditIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  stroke: ${props => props.theme.colum.icon};
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: ${props => props.theme.colum.buttonBackground};
  }
`;

export const DelIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  stroke: ${props => props.theme.colum.icon};
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: ${props => props.theme.colum.buttonBackground};
  }
`;
