import React from 'react';
import { Btn, LogoutIcon, LogoutBtnText } from './Logout.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const BtnLogout = () => {
  const dispath = useDispatch()
  const handleLogOut = () => dispath(logOut())
  return (
    <Btn type="button" onClick={handleLogOut}>
      <LogoutIcon name="logout" />
      <LogoutBtnText>Log out</LogoutBtnText>
    </Btn>
  );
};
