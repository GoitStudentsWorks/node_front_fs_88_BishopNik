import { ModalEditProfile } from 'components/Modal/EditProfil/ModalEditProfile';
import { useState } from 'react';
import data from 'img/list_img.json';
import { UserInfoWrapper, UserName, UserAvatar } from './UserInfo.styled';
import { useSelector } from 'react-redux';
import { selectUser, selectUserTheme} from 'redux/auth/selectors';


export const UserInfo = () => {
  const { name, avatarURL } = useSelector(selectUser);
  const [isModalState, setIsModalState] = useState(false);
<<<<<<< Updated upstream
  const activeUserTheme = useSelector(selectUserTheme);

=======
  // const activeUserTheme = useSelector;
>>>>>>> Stashed changes

  const stateСhangeModal = () => {
    if (isModalState === true) {
      setIsModalState(false);
    } else {
      setIsModalState(true);
    }
  };

<<<<<<< Updated upstream
  const setDefaultAvatar = () => {
    if (activeUserTheme === 'dark') {
      return data.user.dark;
    } else if (activeUserTheme === 'light') {
      return data.user.light;
    } else if (activeUserTheme === 'violet') {
      return data.user.violet;
    }
  };
=======
  //  const setDefaultAvatar = () => {
  //   if (activeUserTheme === 'dark') {
  //      return  data.user.dark ;
  //   } else if (activeUserTheme === 'light') {
  //      return data.user.light ;
  //   } else if (activeUserTheme === 'violet') {
  //     return data.user.violet;
  //   }
  // };
>>>>>>> Stashed changes

  return (
    <div>
      <UserInfoWrapper>
        <UserName>{name}</UserName>
        <UserAvatar
<<<<<<< Updated upstream
          src={ avatarURL || setDefaultAvatar  /* setDefaultAvatar || avatarURL*/ }

=======
          src={data.user.dark|| avatarURL} 
>>>>>>> Stashed changes
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
