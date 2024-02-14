/** @format */

import { ModalEditProfile } from 'components/Modal/EditProfileModal/EditProfileModal';
import { useState } from 'react';
import data from 'img/list_img.json';
import { UserInfoWrapper, UserName, UserAvatar } from './UserInfo.styled';
import { useAuth } from 'hooks';

export const UserInfo = () => {
  const { user } = useAuth();
  const { name, avatarURL, thema: activeUserTheme } = user;
  const [isModalState, setIsModalState] = useState(false);
  const stateСhangeModal = () => {
    if (isModalState === true) {
      setIsModalState(false);
    } else {
      setIsModalState(true);
    }
  };
  const setDefaultAvatar = () => {
    if (activeUserTheme === 'Dark') {
      return data.user.dark;
    } else if (activeUserTheme === 'Light') {
      return data.user.light;
    } else if (activeUserTheme === 'Violet') {
      return data.user.violet;
    }
  };

  return (
    <div>
      <UserInfoWrapper>
        <UserName>{name}</UserName>
        <UserAvatar src={avatarURL || setDefaultAvatar()} />
      </UserInfoWrapper>
      <ModalEditProfile
        stateСhangeModal={stateСhangeModal}
        isModalState={isModalState}
      />
    </div>
  );
};

export default UserInfo;
