/** @format */

import Icon from '../Icon';
import { FilterBtnStyle, FilterIcon } from './FiltersBtn.styled.jsx';

const FilterBtn = () => {
	return (
		<FilterBtnStyle>
			<FilterIcon>
				<Icon name='filters' />
			</FilterIcon>
		</FilterBtnStyle>
	);
};

export default FilterBtn;
