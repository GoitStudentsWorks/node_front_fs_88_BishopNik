import styled from 'styled-components';

export const HeaderDashboardContainer = styled.div`
  width: 100vw;
  padding: 0px 24px;
  font-wight: 500;
  font-size: 18px;
  display: flex;
`;

export const Title = styled.h3`
  color: ${props => props.theme.help.modalTextMain};
`;
