/** @format */

import { FiltersIcon } from 'components/Filter/FiltersBtn.styled';
import data from '../../img/list_img.json';
import { BlockLogoStyles, LogoStyles } from './UserProfileForm.Styled';
import { useAuth } from 'hooks';

export const UserIcon = () => {
  let src = data.user.dark;
  const { user } = useAuth()
  const {avatarURL} = user
  if (avatarURL) {
    src = avatarURL;
  }
  return (
    <BlockLogoStyles>
      <img src={src} alt="UserIcon" width={68} />
      <LogoStyles>
        <FiltersIcon name="add-board"></FiltersIcon>
      </LogoStyles>
    </BlockLogoStyles>
  );
};
