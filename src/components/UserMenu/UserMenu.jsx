/** @format */

import { NavLink } from 'react-router-dom';
import Menu from 'components/Menu';
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
						width: '300px',
						height: '50px',
					}}
				>
					Click me
				</button>
				{modalIsOpen && <ModalWindow closeModal={closeModal} />}
				<Menu />
			</nav>
		</>
	);
};
