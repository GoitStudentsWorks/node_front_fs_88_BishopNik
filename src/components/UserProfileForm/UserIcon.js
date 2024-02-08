import { FiltersIcon } from 'components/MainComponent/MainComponent.styled';

import data from '../../img/list_img.json';
import {
  BlockLogoStyles,
  LogoStyles,
  logoStyles,
} from './UserProfileForm.Styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

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
