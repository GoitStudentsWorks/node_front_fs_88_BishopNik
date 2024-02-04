import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../Icon/icon-spraite.svg';
import { Button, Icon } from './BurgerMenu.styled';

const BurgenMenu = () => {
  const dispatch = useDispatch();
  const menuMode = useSelector;

  return (
    <Button
      type="button"
      onClick={() => dispatch}
      isOpen={menuMode}
    >
      <Icon>
        <use href={sprite + '#icon-menu'} />
      </Icon>
    </Button>
  );
};

export default BurgenMenu;