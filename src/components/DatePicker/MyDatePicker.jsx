import React, { useState } from 'react';
import { CustomDatePicker, DatePickerContainer } from './MyDatePicker.styled';

const MyDatePicker = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <DatePickerContainer>
      <CustomDatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()}
        dateFormat={`'Today, 'MMMM d \u02C5`}
      />
    </DatePickerContainer>
  );
};

export default MyDatePicker;
