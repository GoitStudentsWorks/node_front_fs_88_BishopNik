import React, { useState } from 'react';
import { CustomDatePicker, DatePickerContainer } from './MyDatePicker.styled';

const MyDatePicker = ({ onChange, value }) => {
  const [selectedDate, setSelectedDate] = useState(
    value ? new Date(value) : new Date()
  );

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
