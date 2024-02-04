import { useState } from 'react';
import { useSelector } from 'react-redux';

import userDark from '../../images/user-dark.jpg';
import userLight from '../../images/user-light.jpg';
import userViolet from '../../images/user-violet.jpg';
import BasicModal from '../../Modal/Modal.jsx';

import { UserAvatar, UserName, Wrapper } from './UserBlock.styled';
import Loader from '../../Loader';

const UserBlock = () => {
  const isLoading = useSelector;
  const [open, setOpen] = useState(false);
  const activeUserTheme = useSelector;
  const { name, avatarURL } = useSelector;

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const setDefaultAvatar = () => {
    if (activeUserTheme === 'dark') {
      return userDark;
    } else if (activeUserTheme === 'light') {
      return userLight;
    } else if (activeUserTheme === 'violet') {
      return userViolet;
    }
  };

  return (
    <>
      <Wrapper>
        <UserName>{name[0].toUpperCase() + name.slice(1)}</UserName>

        {isLoading ? (
          <Loader />
        ) : (
          <UserAvatar
            src={avatarURL || setDefaultAvatar()}
            alt="user name"
            onClick={handleOpen}
          />
        )}
      </Wrapper>
      <BasicModal
        name="EditProfile"
        open={open}
        closeModal={handleClose}
      />
    </>
  );
};

export default UserBlock;