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
  letter-spacing: 0.4px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
`;

export const LogoIcon = styled(Icon)`
  width: 32px;
  height: 32px;
`;
