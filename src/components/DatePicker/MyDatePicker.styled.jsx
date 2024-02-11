import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  /* border-radius: 8px; */

  .react-datepicker {
    border-radius: 8px;
    border-color: ${props => props.theme.modal.buttonBackground};
  }

  .react-datepicker__month-container {
    padding: 18px;
    background-color: ${props => props.theme.modal.backgroundSecondary};
    border-radius: 8px;
  }

  .react-datepicker__month {
    margin: 0;
  }

  .react-datepicker__current-month {
    padding-bottom: 14px;
    border-bottom: 1px solid #aeaeae;
    color: ${props => props.theme.modal.textMain};
  }

  .react-datepicker__navigation {
    top: 12px;
  }

  .react-datepicker__navigation--next {
  }

  .react-datepicker__header {
    padding: 0;
    background-color: ${props => props.theme.modal.backgroundSecondary};
    border-bottom: none;
  }
  .react-datepicker__day-name {
    color: ${props => props.theme.modal.textSecondary};
  }

  .react-datepicker__day {
    margin: 0;
    border-radius: 50%;
    color: ${props => props.theme.modal.textMain};
  }

  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: ${props => props.theme.modal.buttonBackground};
    color: ${props => props.theme.modal.today};
  }

  .react-datepicker__day--selected {
    border-radius: 50%;
    background-color: ${props => props.theme.modal.buttonBackground};
    color: ${props => props.theme.modal.today};
  }

  .react-datepicker__day--disabled {
    /* color: #ccc; */
  }

  .react-datepicker__day--outside-month {
    color: ${props => props.theme.modal.unactiveDay};
  }

  .react-datepicker__day--keyboard-selected {
    background-color: ${props => props.theme.modal.buttonBackground};
    color: ${props => props.theme.modal.today};
  }
`;

const CustomDatePicker = styled(DatePicker)`
  width: 300px;
  border: none;
  color: ${props => props.theme.modal.textAccent};
  background-color: ${props => props.theme.profile.background};
  outline: none;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.sidebar.hoverLogout};
  }
`;

export { DatePickerContainer, CustomDatePicker };
