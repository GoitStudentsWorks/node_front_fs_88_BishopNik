/** @format */

import { FiltersIcon } from 'components/Filter/FiltersBtn.styled';

import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

import data from '../../img/list_img.json';

import {
  BlockLogoStyles,
  LogoStyles,
  logoStyles,
} from './UserProfileForm.Styled';

export const UserIcon = () => {
  let src = data.user.dark;
  const { avatarURL } = useSelector(selectUser);
  if (avatarURL) {
    src = avatarURL;
  }
  return (
    <BlockLogoStyles>
      <img src={src} alt="DarkUser" width={68} />
      <LogoStyles>
        <FiltersIcon name="add-board" style={logoStyles}></FiltersIcon>
      </LogoStyles>
    </BlockLogoStyles>
  );
};
