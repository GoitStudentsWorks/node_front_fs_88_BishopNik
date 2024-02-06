
import { useParams } from 'react-router-dom';
import { HeaderDashboard } from './HeaderDashboard/HeaderDashboard';
import MainDashboard from './MainDashboard/MainDashboard';

const ScreenPage = () => {
  const { boardName } = useParams();

  return (
    <>
      <HeaderDashboard title={boardName} />
      <MainDashboard/>
    </>
  );
};
export default ScreenPage;
