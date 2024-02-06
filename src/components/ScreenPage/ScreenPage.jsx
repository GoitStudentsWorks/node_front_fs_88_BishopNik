/** @format */

import { useParams } from 'react-router-dom';
import { HeaderDashboard } from './HeaderDashboard/HeaderDashboard';
import MainDashboard from './MainDashboard/MainDashboard';

const ScreenPage = () => {
	const { board } = useParams();

	return (
		<>
			<HeaderDashboard title={board} />
			<MainDashboard />
		</>
	);
};
export default ScreenPage;
