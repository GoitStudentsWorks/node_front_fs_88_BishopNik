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
  color: ${props => props.theme.modal.textAccent};
  background-color: ${props => props.theme.profile.background};
  outline: none;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.sidebar.hoverLogout};
    ;
  }
`;

export { DatePickerContainer, CustomDatePicker };