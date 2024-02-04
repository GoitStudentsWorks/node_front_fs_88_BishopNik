import React from 'react';
import { Btn, LogoutIcon, LogoutBtnText } from './Logout.styled';

export const BtnLogout = () => {
  return (
    <Btn>
      <LogoutIcon name="logout" />
      <LogoutBtnText>Log out</LogoutBtnText>
    </Btn>
  );
};
