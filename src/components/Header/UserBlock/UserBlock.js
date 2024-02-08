// /** @format */

// import { useSelector } from 'react-redux';
// import { UserName, Wrapper, UserAvatar } from './UserBlock.styled';
// import UserDark from '../../../img/userDark.jpg';
// import UserLight from '../../../img/userLight.jpg'
// import UserViolet from '../../../img/userViolet.jpg'
// import { selectUser, selectUserTheme } from 'redux/auth/selectors';
// import UserInfo from '../../../components/UserInfo/UserInfo'
	
// import  UserBlock = () => {
// 	const { name } = useSelector(selectUser);
// 	const activeUserTheme = useSelector(selectUserTheme);

// 	 const setDefaultAvatar = () => {
//     if (activeUserTheme === 'dark') {
//       return UserDark;
//     } else if (activeUserTheme === 'light') {
//       return UserLight;
//     } else if (activeUserTheme === 'violet') {
//       return UserViolet;
//     }
// 	};
	
// 	return (
// 		<>
// 			{' '}
// 			<Wrapper>
// 				<UserName>{name[0].toUpperCase() + name.slice(1)}</UserName>
// 				<UserAvatar
// 					src={UserLight || setDefaultAvatar }
// 					alt="user name"
// 				/>
// 			</Wrapper>
// 		</>
// 	);
// };

// export default UserBlock;