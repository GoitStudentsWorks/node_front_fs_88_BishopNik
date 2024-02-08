import styled from 'styled-components';
import Icon from 'components/Icon/Icon.jsx';

export const ModalContainer = styled.div`
  position: relative;
  background: #151515;
  padding: 24px;
  border-radius: 8px;
  min-width: 320px;
  @media (max-width: 767px) {
    width: 335px;
  }
  @media (min-width: 768px) {
    width: 350px;
  }
  margin: 0 auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  background: rgb(21, 21, 21);
  border: none;
`;

export const IconClose = styled(Icon)`
  position: absolute;

  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  cursor: pointer;
  stroke: #ffffff;
`;

export const FormTitle = styled.h2`
  color: rgb(255, 255, 255);
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  margin: 0px;
`;

export const SubTitles = styled.h3`
  color: rgba(255, 255, 255, 0.5);
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin: 0;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 18px;
  margin: 24px 0 14px 0;
  border: 1px solid rgb(190, 219, 176);
  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  background: rgb(31, 31, 31);
  opacity: 0.4;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 154px;
  padding: 14px 18px;
  margin-bottom: 24px;
  border: 1px solid rgb(190, 219, 176);
  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  background: rgb(31, 31, 31);
  opacity: 0.4;
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const RadioButton = styled.input`
  margin-bottom: 14px;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #000;
  outline: none;
  cursor: pointer;
  background-color: ${props => {
    switch (props.value) {
      case 'color1':
        return '#8FA1D0';
      case 'color2':
        return '#E09CB5';
      case 'color3':
        return '#BEDBB0';
      case 'color4':
        return 'rgba(255, 255, 255, 0.3)';
      default:
        return 'rgba(255, 255, 255, 0.3)';
    }
  }};

  &:focus {
    border: 2px solid #151515;
  }

  &:checked {
    border: 2px solid transparent;
  }
`;

export const AddButton = styled.button`
  background-color: #bedbb0;
  color: #151515;
  padding: 10px 0 11px 0;
  border: none;
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;

  &::before {
    content: '+';
    display: block;
    width: 28px;
    height: 28px;
    background-color: #151515;
    border-radius: 8px;
    color: #bedbb0;
    font-size: 20px;
    text-align: center;
    line-height: 28px;
    margin-right: 10px;
    
  }
`;
