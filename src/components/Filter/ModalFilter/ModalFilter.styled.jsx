import styled from "styled-components";

export const customStyles = {
  overlay: {
    backgroundColor: 'rgba(78, 74, 72, 0.6)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const RadioButton = styled.label`
  display:flex;
  margin-right: 10px;
`;

export const RadioButtonGroup = styled.div`
  margin-top: 20px;
`;