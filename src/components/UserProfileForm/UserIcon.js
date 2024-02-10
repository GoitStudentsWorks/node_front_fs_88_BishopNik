/** @format */

import { useSelector } from 'react-redux';
import { selectUser, selectUserTheme } from 'redux/auth/selectors';

import data from '../../img/list_img.json';

import {
  BlockLogoStyles,
  ButtonIcon,
  LogoStyles,
} from './UserProfileForm.Styled';

export const UserIcon = () => {
  const { avatarURL } = useSelector(selectUser);
  const activeUserTheme = useSelector(selectUserTheme);

  console.log(useSelector(selectUserTheme));
  console.log(activeUserTheme);

  const setDefaultAvatar = () => {
    if (activeUserTheme === 'dark') {
      return data.user.dark;
    } else if (activeUserTheme === 'light') {
      return data.user.light;
    } else if (activeUserTheme === 'violet') {
      return data.user.violet;
    }
  };

  let src = setDefaultAvatar();
  if (avatarURL) {
    src = avatarURL;
  }
  return (
    <BlockLogoStyles>
      <img src={src} alt="UserIcon" width={68} />
      <LogoStyles>
        <ButtonIcon name="add-board"></ButtonIcon>
      </LogoStyles>
    </BlockLogoStyles>
  );
};
