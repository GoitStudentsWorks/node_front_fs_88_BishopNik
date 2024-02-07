/** @format */

import { ButtonFilter, FiltersIcon, TextButton } from './FiltersBtn.styled.jsx';

export const FilterBtn = ({ onClick }) => {
	return (
		<ButtonFilter type='button' onClick={onClick}>
			<FiltersIcon name='filters' />
			<TextButton>Filters</TextButton>
		</ButtonFilter>
	);
};
