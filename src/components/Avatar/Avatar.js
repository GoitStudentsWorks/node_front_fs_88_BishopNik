/** @format */

import data from '../../img/list_img.json';
import { StyledAvatar } from './Avatar.Styled';

const Avatar = () => {
	return (
		<div>
			<StyledAvatar src={data.avatar} alt='User avatar' />
		</div>
	);
};

export default Avatar;
