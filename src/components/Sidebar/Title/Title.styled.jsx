import styled from 'styled-components';

export const TitleText = styled.p`
  font-size: 12px;
  letter-spacing: -0.2px;
  font-weight: normal;
  color: ${props => props.theme.sidebar.textSecondary};
  margin: 0px;
  margin-top: 70px;
  margin-left: 24px;
  padding: 0px;
  cursor: default;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;
