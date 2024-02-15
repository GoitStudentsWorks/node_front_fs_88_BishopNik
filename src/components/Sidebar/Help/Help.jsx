/** @format */

import React, { useContext } from 'react';
import data from '../../../img/list_img.json';
// import { useDispatch } from 'react-redux';
// import { modalsSlice } from 'redux/modals/modalSlice';
import { MainContext } from 'components/Helpers';
import {
	HelpContainer,
	HelpText,
	BtnHelp,
	HelpIcon,
	HelpBtnText,
	HelpSpanText,
	HelpImgDiv,
} from './Help.styled';

export const Help = () => {
	// const dispatch = useDispatch();
	const { setIsOpenHelp } = useContext(MainContext);

	return (
		<HelpContainer>
			<HelpImgDiv>
				<img src={data.help} alt='Cactus' width={54} />
			</HelpImgDiv>
			<HelpText>
				If you need help with <HelpSpanText>TaskPro</HelpSpanText>, check out our support
				resources or reach out to our customer support team.
			</HelpText>
			<BtnHelp onClick={() => setIsOpenHelp(true)}>
				<HelpIcon name='help' />
				<HelpBtnText>Need help?</HelpBtnText>
			</BtnHelp>
		</HelpContainer>
	);
};
