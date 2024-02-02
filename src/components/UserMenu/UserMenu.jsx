/** @format */

import { NavLink } from 'react-router-dom';
import ModalWindow from '../Modal';
import { useState } from 'react';

export const UserMenu = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const closeModal = () => setModalIsOpen(false);
	return (
		<>
			<nav>
				<NavLink to='/todos' end>
					Boards
				</NavLink>
				<button
					id='avatar_menu'
					onClick={() => setModalIsOpen(true)}
					style={{
						marginLeft: '30px',
						width: '100px',
						height: '25px',
					}}
				>
					Click me
				</button>
				{modalIsOpen && <ModalWindow closeModal={closeModal} />}
			</nav>
		</>
	);
};
