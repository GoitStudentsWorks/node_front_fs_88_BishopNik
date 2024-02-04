/** @format */

import data from '../../img/list_img.json';

const Avatar = () => {
	return (
		<div>
			<img src={data.avatar} alt='User avatar' />
		</div>
	);
};

export default Avatar;
