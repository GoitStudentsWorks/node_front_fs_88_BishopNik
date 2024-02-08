import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;  
`;

const CustomDatePicker = styled(DatePicker)`  
  width: 200px;  
  border: none;
  color: #BEDBB0;
  background-color: ${({ theme }) => theme.modal.backgroundMain};
  outline: none;
  cursor: pointer;

  &:hover {
    color: #9DC888;
    ;
  }
`;

export { DatePickerContainer, CustomDatePicker };