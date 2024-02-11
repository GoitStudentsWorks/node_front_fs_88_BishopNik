/** @format */

import React, { useState } from 'react';
import { CustomDatePicker, DatePickerContainer } from './MyDatePicker.styled';

const MyDatePicker = ({ onChange, value }) => {
	const [selectedDate, setSelectedDate] = useState(value ? new Date(value) : new Date());

	const handleDateChange = date => {
		setSelectedDate(date);
		onChange(date.getTime());
	};

	return (
		<DatePickerContainer>
			<CustomDatePicker
				selected={selectedDate}
				onChange={handleDateChange}
				minDate={new Date()}
				dateFormat='MMMM.dd'
			/>
		</DatePickerContainer>
	);
};

export default MyDatePicker;
