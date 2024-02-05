import styled from 'styled-components';

export const ModalWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 8px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  z-index: 1000;
  display: ${props => (props.open ? 'block' : 'none')};
`;

export const ModalField = styled.div`
  position: relative;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;
