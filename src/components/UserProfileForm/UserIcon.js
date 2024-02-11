/** @format */

import { ButtonIcon } from 'components/UserProfileForm/UserProfileForm.Styled';
import data from '../../img/list_img.json';
import { BlockLogoStyles, LogoStyles } from './UserProfileForm.Styled';
import { useAuth } from 'hooks';

export const UserIcon = () => {
	let src = data.user.dark;
	const { user } = useAuth();
	const { avatarURL } = user;

	if (avatarURL) {
		src = avatarURL;
	}
	return (
		<BlockLogoStyles>
			<img src={src} alt='UserIcon' width={68} />
			<LogoStyles>
				<ButtonIcon name='add-board'></ButtonIcon>
			</LogoStyles>
		</BlockLogoStyles>
	);
};
