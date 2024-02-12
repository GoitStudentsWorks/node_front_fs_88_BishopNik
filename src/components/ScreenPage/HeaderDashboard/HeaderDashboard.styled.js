/** @format */

import styled from 'styled-components';

export const HeaderDashboardContainer = styled.div`
  padding: 0px 24px;
  font-weight: 500;
  font-size: 18px;
  display: flex;
`;

export const Title = styled.h3`
  padding: 0;
  margin: 0;
  color: ${props => props.theme.help.modalTextMain};
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: -0.02em;
  text-align: left;
  cursor: default;
`;
