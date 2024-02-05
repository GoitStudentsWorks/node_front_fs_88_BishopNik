import React from 'react';
import { useParams } from 'react-router-dom';
import { HeaderDashboard } from './HeaderDashboard/HeaderDashboard';
import { MainDashboard } from './MainDashboard/MainDashboard';

export const ScreenPage = () => {
  const { boardName } = useParams();
  console.log(boardName);

  return (
    <div>
      <HeaderDashboard title={boardName} />
      <MainDashboard />
    </div>
  );
};

// import { useParams } from 'react-router-dom';

// const ScreensPage = () => {
//   const { boardName } = useParams();

//   return (
//     <>
//       <h1>Hello i am ScreensPage board № {boardName} </h1>
//     </>
//   );
// };
// export default ScreensPage;
