import styled from 'styled-components';
import Icon from '../../Icon/index';

export const LogoContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  margin-top: 24px;
  border: none;
  background-color: transparent;
  width: 104px;
  height: 32px;
`;

export const LogoText = styled.p`
  font-size: 16px;
  letter-spacing: -0.04em;
  margin: 0;
  font-weight: bold;
  color: ${props => props.theme.header.userName};
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(31, 31, 31, 1);
  border-radius: 5px;
  width: 32px;
  height: 32px;
`;

export const LogoIcon = styled(Icon)`
  width: 12px;
  height: 16px;
  fill: rgba(255, 255, 255, 1);
`;
