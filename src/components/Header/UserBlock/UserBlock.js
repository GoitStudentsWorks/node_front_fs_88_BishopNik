import { useState } from 'react';

import userDark from '../../../img/user_dark.png';
// import userLight from '../../../img/user_light.png';
// import userViolet from '../../../img/user_violet.png';
import BasicModal from '../../Modal/Modal.jsx';

import { UserAvatar, UserName, Wrapper } from './UserBlock.styled';

const UserBlock = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const setDefaultAvatar = userDark;

  return (
    <>
      <Wrapper>
        <UserName>
        </UserName>

          <UserAvatar
            src={setDefaultAvatar()}
            alt="user name"
            onClick={handleOpen}
          />
        
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