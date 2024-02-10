import { ModalEditProfile } from 'components/Modal/EditProfil/ModalEditProfile';
import { useState } from 'react';
import data from 'img/list_img.json';
import { UserInfoWrapper, UserName, UserAvatar } from './UserInfo.styled';
import { useAuth } from 'hooks';

export const UserInfo = () => {
  const {user} = useAuth()
  const { name, avatarURL, theme: activeUserTheme } = user;
  const [isModalState, setIsModalState] = useState(false);



  const stateСhangeModal = () => {
    if (isModalState === true) {
      setIsModalState(false);
    } else {
      setIsModalState(true);
    }
  };
  const setDefaultAvatar = () => {
    if (activeUserTheme === 'dark') {
      return data.user.dark;
    } else if (activeUserTheme === 'light') {
      return data.user.light;
    } else if (activeUserTheme === 'violet') {
      return data.user.violet;
    }
  };

  return (
    <div>
      <UserInfoWrapper>
        <UserName>{name}</UserName>
        <UserAvatar
          src={avatarURL || setDefaultAvatar()}
          alt="user name"
          onClick={stateСhangeModal}
        />
      </UserInfoWrapper>
      <ModalEditProfile
        stateСhangeModal={stateСhangeModal}
        isModalState={isModalState}
      />
    </div>
  );
};

export default UserInfo;
