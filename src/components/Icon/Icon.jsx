/** @format */

import React from 'react';
import sprite from './icon-spraite.svg';

const Icon = ({ name, ...otherProps }) => {
	return (
		<svg {...otherProps}>
			<use xlinkHref={`${sprite}#icon-${name}`} />
		</svg>
	);
};

export default Icon;
