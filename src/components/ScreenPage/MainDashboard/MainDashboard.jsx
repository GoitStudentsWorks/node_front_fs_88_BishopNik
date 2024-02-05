import React, { useState } from 'react';
import { AddColumnButton } from './MainDashboard.styled';
import BasicModal from 'components/ScreenPage/MainDashboard/BasicModal';
import AddColumnModal from 'components/ScreenPage/MainDashboard/AddColumnModal';

const MainDashboard = () => {
  const [openAddColumnModal, setOpenAddColumnModal] = useState(false);

  const handleOpenAddColumnModal = () => {
    setOpenAddColumnModal(true);
  };

  const handleCloseAddColumnModal = () => {
    setOpenAddColumnModal(false);
  };

  return (
    <>
      <AddColumnButton onClick={handleOpenAddColumnModal}>
        + Add another column
      </AddColumnButton>

      <BasicModal
        open={openAddColumnModal}
        closeModal={handleCloseAddColumnModal}
        children={<AddColumnModal closeModal={handleCloseAddColumnModal} />}
      />
    </>
  );
};

export default MainDashboard;
