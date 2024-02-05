/** @format */

import data from '../../img/list_img.json';
import { StiledAvatar } from './Avatar.Styled';

const Avatar = () => {
	return (
		<div>
			<StiledAvatar src={data.avatar} alt='User avatar' />
		</div>
	);
};

export default Avatar;
