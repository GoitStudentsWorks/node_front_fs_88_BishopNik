/** @format */

import { AuthNavigation } from 'components/AuthNavigation';

import React from 'react';

import { ModalEditProfile } from 'components/Modal/ModalEditProfile';
import { UserInfo } from 'components/UserInfo/UserInfo';

const StartPage = () => {
  return (
    <>
      <AuthNavigation />
      <UserInfo />
      <ModalEditProfile />
    </>
  );
};

export default StartPage;
