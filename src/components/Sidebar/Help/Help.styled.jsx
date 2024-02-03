import styled from 'styled-components';
import Icon from '../../Icon/index';

export const HelpContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  border: none;
  background-color: transparent;

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
  font-weight: 500;
  letter-spacing: 0.2px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 1);
  margin: 0;
`;

export const HelpSpanText = styled.span`
  color: rgba(190, 219, 176, 1);
  font-size: 12px;
`;

export const HelpBtnText = styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 1);
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

  &:hover,
  &:focus {
    ${HelpBtnText} {
      color: rgba(157, 200, 136, 1);
    }
  }
`;

export const HelpIcon = styled(Icon)`
  width: 20px;
  height: 20px;
  stroke: white;
`;
