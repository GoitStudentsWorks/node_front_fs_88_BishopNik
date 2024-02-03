import { ModalEditProfile } from 'components/Modal/ModalEditProfile';
import { useState } from 'react';

export const UserInfo = () => {
  const [isModalState, setIsModalState] = useState(false);

  const stateСhangeModal = () => {
    if (isModalState === true) {
      setIsModalState(false);
    } else {
      setIsModalState(true);
    }
  };

  return (
    <div>
      <span>login</span>
      <button onClick={stateСhangeModal}>Click to open modal</button>
      <ModalEditProfile
        stateСhangeModal={stateСhangeModal}
        isModalState={isModalState}
        // src={largeImag
      />
    </div>
  );
};
