import styled from 'styled-components';

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
    width: '300px',
    backgroundColor: '#151515',
    border: 'none',
    padding: '24px',
    position: 'relative',
  },
};

export const TitleBox = styled.div`
border-bottom: 1px solid #FFFFFF4D;
padding-bottom: 14px;
`

export const Title = styled.h2`
color: #FFFFFF;
margin: 0;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const RadioButton = styled.label`
  display: flex;
  margin-right: 10px;
`;

export const RadioButtonGroup = styled.div`
  margin-top: 20px;
`;
