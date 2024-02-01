/** @format */

import Modal from 'react-modal';

Modal.setAppElement('#modal-root');

const ModalWindow = ({ closeModal }) => {
	return (
		<div
			style={{
				width: '500px',
				height: '150px',
				position: 'absolute',
				top: '10px',
				right: '15px',
				border: '1px solid black',
				borderRadius: '8px',
				padding: '15px 50px',
			}}
		>
			<h1>Modal window</h1>
			<button type='button' onClick={closeModal}>
				Close
			</button>
		</div>
	);
};

export default ModalWindow;
