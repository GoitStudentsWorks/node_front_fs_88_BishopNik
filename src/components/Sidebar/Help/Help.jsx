/** @format */

import React from 'react';
import data from '../../../img/list_img.json';
import { NeedHelpModal } from 'components/Modal';
import { useDispatch } from 'react-redux';
import { modalsSlice } from 'redux/modals/modalSlice';
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
	const dispatch = useDispatch();

	return (
		<HelpContainer>
			<HelpImgDiv>
				<img src={data.help} alt='Cactus' width={54} />
			</HelpImgDiv>
			<HelpText>
				If you need help with <HelpSpanText>TaskPro</HelpSpanText>, check out our support
				resources or reach out to our customer support team.
			</HelpText>
			<BtnHelp onClick={() => dispatch(modalsSlice.actions.openNeedHeplModal(true))}>
				<HelpIcon name='help' />
				<HelpBtnText>Need help?</HelpBtnText>
			</BtnHelp>
			<NeedHelpModal />
		</HelpContainer>
	);
};
