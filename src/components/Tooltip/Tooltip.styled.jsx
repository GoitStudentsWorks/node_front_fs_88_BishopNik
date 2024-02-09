import styled from 'styled-components';

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
`;

export const TooltipContent = styled.div`
  background: ${({ theme }) => theme.modal.backgroundMain};  
  text-align: center;
  border-radius: 8px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  width: 120px;
`;

export const TooltipButton = styled.button`
  background-color: transparent;
  color: #BEDBB0;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #fff;
  }
`;

export const Icon = styled.svg`
width: 16px;
  height: 16px;
  stroke: ${props => props.theme.sidebar.projectIcon};
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: ${props => props.theme.sidebar.textAccent};
  }
`;