/** @format */

import { ButtonIcon } from 'components/UserProfileForm/UserProfileForm.Styled';
import data from '../../img/list_img.json';
import { BlockLogoStyles, LogoStyles } from './UserProfileForm.Styled';
import { useAuth } from 'hooks';

export const UserIcon = newSrc => {
  // if (!newSrc) {
  //   src = data.user.dark;
  // }
  const { user } = useAuth();
  const { avatarURL } = user;
  // console.log(src);

  // if (avatarURL) {
  //   src = avatarURL;
  // }
  // console.log(src);
  return (
    <BlockLogoStyles>
      <img
        src={newSrc}
        alt="UserIcon"
        style={{ width: '68px', height: '68px' }}
      />
      <LogoStyles>
        <ButtonIcon name="add-board"></ButtonIcon>
      </LogoStyles>
    </BlockLogoStyles>
  );
};

export const UserIconAvatar = () => {
  let src = data.user.dark;
  const { user } = useAuth();
  const { avatarURL } = user;

  if (avatarURL) {
    src = avatarURL;
  }
  const imgLogo = `<img src=${src} alt="UserIcon" width={68}/>`;
  return imgLogo;
};
