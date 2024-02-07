import styled from 'styled-components';
import DatePicker from 'react-datepicker';

const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;  
`;

const CustomDatePicker = styled(DatePicker)`  
  width: 200px;
  margin-top: 10px;
  border: none;
  color: #BEDBB0;
  background-color: transparent;
`;

export { DatePickerContainer, CustomDatePicker };