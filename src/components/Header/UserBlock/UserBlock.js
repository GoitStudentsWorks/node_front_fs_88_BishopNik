
import { useSelector } from 'react-redux';
import {UserName, Wrapper } from './UserBlock.styled';
import data from '../../../img/list_img.json';
const UserBlock = () => {
const { name } = useSelector;

  return (
      <Wrapper>
      <UserName>{name[0].toUpperCase() + name.slice(1)}</UserName>
        <img src={data.user.dark} alt="DarkUser" width={32} />
      </Wrapper>
  );
};

export default UserBlock;