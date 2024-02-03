import React, { useState } from 'react';
import Modal from '../Modal/index';
import Icon from '../Icon/Icon';

const Filter = ({ onSaveBackground }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [background, setBackground] = useState('');
  const [priority, setPriority] = useState('without');

  const handleSave = () => {
    onSaveBackground(background);
    setModalOpen(false);
  };

  return (
    <>
		  <button onClick={() => setModalOpen(true)}>Filter</button>
		  <Icon name="icon-filters" />
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <h1>Filter</h1>
          <h2>Label Color</h2>
          <div>
            <label>
              <input
                type="radio"
                value="without"
                checked={priority === 'without'}
                onChange={() => setPriority('without')}
              />
              Without
            </label>
            <label>
              <input
                type="radio"
                value="low"
                checked={priority === 'low'}
                onChange={() => setPriority('low')}
              />
              Low
            </label>
            <label>
              <input
                type="radio"
                value="medium"
                checked={priority === 'medium'}
                onChange={() => setPriority('medium')}
              />
              Medium
            </label>
            <label>
              <input
                type="radio"
                value="high"
                checked={priority === 'high'}
                onChange={() => setPriority('high')}
              />
              High
            </label>
          </div>
          <button onClick={handleSave}>Save</button>
        </Modal>
      )}
    </>
  );
};

export default Filter;
