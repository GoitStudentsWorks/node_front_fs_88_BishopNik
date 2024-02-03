/** @format */

import { ModalEditProfile } from 'components/Modal/ModalEditProfile';
import { UserInfo } from 'components/UserInfo/UserInfo';
import React from 'react';

const StartPage = () => {
  return (
    <>
      <h1>Hello Developer (Start Page)</h1>
      <UserInfo />
      <ModalEditProfile />
    </>
  );
};

export default StartPage;
