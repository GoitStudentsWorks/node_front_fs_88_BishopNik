import { useState, React } from 'react';
import Modal from 'react-modal';
import { customStyles, RadioButton, RadioButtonGroup } from './ModalFilter.styled.jsx';

Modal.setAppElement('#modal-root');

const ModalFilter = ({ isModalOpen, setIsModalOpen }) => {

  const [selectedOption, setSelectedOption] = useState('Without priority');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)} 
      style={customStyles}
      contentLabel="onRequestClose"
    >
      <h1>Filters</h1>
      <button type="button" onClick={() => setIsModalOpen(false)}> 
        X
      </button>
      <h2>Label color</h2>
      <RadioButtonGroup>
        <RadioButton>
          <input
            type="radio"
            value="Without priority"
            checked={selectedOption === 'Without priority'}
            onChange={handleOptionChange}
          />
          Without priority
        </RadioButton>
        <RadioButton>
          <input
            type="radio"
            value="Low"
            checked={selectedOption === 'Low'}
            onChange={handleOptionChange}
          />
          Low
        </RadioButton>
        <RadioButton>
          <input
            type="radio"
            value="Medium"
            checked={selectedOption === 'Medium'}
            onChange={handleOptionChange}
          />
          Medium
        </RadioButton>
        <RadioButton>
          <input
            type="radio"
            value="High"
            checked={selectedOption === 'High'}
            onChange={handleOptionChange}
          />
          High
        </RadioButton>
      </RadioButtonGroup>
    </Modal>
  );
};

export default ModalFilter;
