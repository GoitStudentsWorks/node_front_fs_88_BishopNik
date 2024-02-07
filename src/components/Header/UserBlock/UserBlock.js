/** @format */

import { useSelector } from 'react-redux';
import { UserName, Wrapper, UserAvatar } from './UserBlock.styled';
import UserPhoto from '../../../img/user.jpg';
import { selectUser } from 'redux/auth/selectors';

const UserBlock = () => {
	const { name } = useSelector(selectUser);

	return (
		<>
			{' '}
			<Wrapper>
				<UserName>{name[0].toUpperCase() + name.slice(1)}</UserName>
				<UserAvatar
            src={UserPhoto()}
            alt="user name"

          />
			</Wrapper>
		</>
	);
};

export default UserBlock;
