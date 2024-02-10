/** @format */

import { HeaderDashboardContainer, Title } from './HeaderDashboard.styled';

export const HeaderDashboard = ({ title }) => {
	return (
		<HeaderDashboardContainer>
			<Title>{title}</Title>
		</HeaderDashboardContainer>
	);
};
