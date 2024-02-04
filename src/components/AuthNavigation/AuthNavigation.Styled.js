import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px 0 20px;
  height: 812px;
  min-width: 320px;
  @media (max-width: 375px) {
    width: 100%;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0;
`;

export const Text = styled.p`
  color: #161616;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  
`;

export const Button = styled.button`
  display: flex;
  @media (max-width: 375px) {
    width: 100%;
  }
  width: 335px;
  padding: 14px 0px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  background: #161616;
  margin-bottom: 14px;
`;

export const Link = styled(NavLink)`
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  text-decoration: none;
`;

export const LinkLogIn = styled(NavLink)`
  color: #161616;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  text-decoration: none;
`;

export const LogoTitle = styled.h3`
  color: #161616;
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.12px;
`;
