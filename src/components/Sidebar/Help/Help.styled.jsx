import styled from 'styled-components';
import Icon from '../../Icon/index';

export const HelpContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  margin-top: auto;
  margin-bottom: 24px;
  border: none;
  background-color: ${props => props.theme.help.background};
  border-radius: 10px;

  @media screen and (min-width: 375px) {
    width: 197px;
    height: 238px;
  }

  @media screen and (min-width: 768px) {
    width: 212px;
    height: 272px;
    padding: 20px;
  }
`;

export const HelpImgDiv = styled.div`
  width: 54px;
  height: 78px;
`;

export const HelpText = styled.p`
  font-size: 14px;
  font-style: normal;
  letter-spacing: -0.02em;
  line-height: 1.4;
  cursor: default;
  color: ${props => props.theme.help.textMain};
  margin: 0;
`;

export const HelpSpanText = styled.span`
  color: ${props => props.theme.help.textAccent};
  font-size: 14px;
  letter-spacing: -0.02em;
  cursor: default;
`;

export const HelpBtnText = styled.p`
  font-size: 12px;
  color: ${props => props.theme.help.textMain};
  margin: 0px;
`;

export const BtnHelp = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  border: none;
  background-color: transparent;
  width: 94px;
  height: 20px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    ${HelpBtnText} {
      color: ${props => props.theme.sidebar.textAccent};
    }
  }
`;

export const HelpIcon = styled(Icon)`
  width: 20px;
  height: 20px;
  stroke: ${props => props.theme.help.textMain};
`;
