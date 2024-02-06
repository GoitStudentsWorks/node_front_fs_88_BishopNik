/** @format */

import { ModalEditProfile } from 'components/Modal';
import { useState } from 'react';
import data from '../../img/list_img.json';
import { UserInfoWrapper } from './UserInfo.styled';

export const UserInfo = () => {
	const [isModalState, setIsModalState] = useState(false);

	const stateСhangeModal = () => {
		if (isModalState === true) {
			setIsModalState(false);
		} else {
			setIsModalState(true);
		}
	};

	return (
		<div>
			<UserInfoWrapper>
				<span>login</span>
				<img src={data.user.dark} alt='LightUser' width={32} onClick={stateСhangeModal} />
			</UserInfoWrapper>
			<ModalEditProfile
				stateСhangeModal={stateСhangeModal}
				isModalState={isModalState}
				// src={largeImag
			/>
		</div>
	);
};

//  <img src={data.user.dark} alt="DarkUser" width={32} />;
