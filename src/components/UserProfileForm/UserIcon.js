import { FiltersIcon } from 'components/MainComponent/MainComponent.styled';

import data from '../../img/list_img.json';

const blockLogoStyles = {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
};

const logoStyles = {
  position: 'absolute',
  bottom: '-7px',
};

export const UserIcon = () => {
  return (
    <div style={blockLogoStyles}>
      <img src={data.user.dark} alt="DarkUser" width={32} />
      <FiltersIcon name="add-board" style={logoStyles} />
    </div>
  );
};
