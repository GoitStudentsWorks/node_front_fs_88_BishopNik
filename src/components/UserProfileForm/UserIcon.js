import { FiltersIcon } from 'components/MainComponent/MainComponent.styled';

import data from '../../img/list_img.json';
import {
  BlockLogoStyles,
  LogoStyles,
  blockLogoStyles,
  logoStyles,
} from './UserProfileForm.Styled';

export const UserIcon = () => {
  return (
    <BlockLogoStyles>
      <img src={data.user.dark} alt="DarkUser" width={68} />
      <LogoStyles>
        <FiltersIcon name="add-board" style={logoStyles}></FiltersIcon>
      </LogoStyles>
    </BlockLogoStyles>
  );
};
