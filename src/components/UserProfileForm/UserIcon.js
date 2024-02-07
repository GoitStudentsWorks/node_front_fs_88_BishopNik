/** @format */

import { FiltersIcon } from 'components/Filter/FiltersBtn.styled';

import data from '../../img/list_img.json';

const blockLogoStyles = {
	display: 'flex',
	justifyContent: 'center',
	position: 'relative',
	marginTop: '24px',
};

const logoStyles = {
	position: 'absolute',
	bottom: '-7px',
	backgroundColor: '#BEDBB0',
	stroke: 'black',
};

export const UserIcon = () => {
	return (
		<div style={blockLogoStyles}>
			<img src={data.user.dark} alt='DarkUser' width={68} />
			<FiltersIcon name='add-board' style={logoStyles} />
		</div>
	);
};
