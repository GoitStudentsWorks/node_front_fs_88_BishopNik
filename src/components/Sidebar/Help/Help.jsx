/** @format */

import React, { useState } from 'react';
import data from '../../../img/list_img.json';
import { NeedHelpModal } from 'components/Modal';
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
	const [isOpen, setIsOpen] = useState(false);

	return (
		<HelpContainer>
			<HelpImgDiv>
				<img src={data.help} alt='Cactus' width={54} />
			</HelpImgDiv>
			<HelpText>
				If you need help with <HelpSpanText>TaskPro</HelpSpanText>, check out our support
				resources or reach out to our customer support team.
			</HelpText>
			<BtnHelp onClick={() => setIsOpen(true)}>
				<HelpIcon name='help' />
				<HelpBtnText>Need help?</HelpBtnText>
			</BtnHelp>
			<NeedHelpModal isOpen={isOpen} setIsOpen={setIsOpen} />
		</HelpContainer>
	);
};
