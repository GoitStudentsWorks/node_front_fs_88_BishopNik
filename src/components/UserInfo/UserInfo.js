import { ModalEditProfile } from 'components/Modal/EditProfil/ModalEditProfile';
import { useState } from 'react';
import data from '../../img/list_img.json';
import { UserInfoWrapper } from './UserInfo.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

export const UserInfo = () => {
  const { name, avatarURL } = useSelector(selectUser);
  const [isModalState, setIsModalState] = useState(false);

  const stateСhangeModal = () => {
    if (isModalState === true) {
      setIsModalState(false);
    } else {
      setIsModalState(true);
    }
  };

  let src = data.user.dark;
  if (avatarURL) {
    src = avatarURL;
  }

  return (
    <div>
      <UserInfoWrapper>
        <span>{name}</span>
        <img src={src} alt="LightUser" width={32} onClick={stateСhangeModal} />
      </UserInfoWrapper>
      <ModalEditProfile
        stateСhangeModal={stateСhangeModal}
        isModalState={isModalState}
      />
    </div>
  );
};
