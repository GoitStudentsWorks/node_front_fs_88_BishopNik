import React, { useState } from 'react';
import DatePickerContainer from './MyDatePicker.styled';
import CustomDatePicker from './MyDatePicker.styled';

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
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