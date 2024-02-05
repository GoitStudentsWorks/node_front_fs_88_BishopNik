import React, { useState } from 'react';

const AddColumnModal = ({ closeModal }) => {
  const [columnName, setColumnName] = useState('');

  const handleInputChange = e => {
    setColumnName(e.target.value);
  };

  const handleAddColumn = e => {
    e.preventDefault();

    closeModal();
  };

  return (
    <form onSubmit={handleAddColumn}>
      <label>
        <input type="text" value={columnName} onChange={handleInputChange} />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddColumnModal;
