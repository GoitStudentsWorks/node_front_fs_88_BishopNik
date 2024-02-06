/** @format */

import { useContext, useEffect } from 'react';
import { Logo } from './Logo/Logo';
import { Title } from './Title/Title';
import { BtnNewBoard } from './Btn_CreateNew/Btn_CreateNew';
import { BoardsList } from './BoardsList/BoardList';
import { Help } from './Help/Help';
import { BtnLogout } from './Logout/Logout';
import { MainContext } from 'components/Helpers';

export const SidebarComponent = () => {
	const { setIsOpen } = useContext(MainContext);

	useEffect(() => {
		if (window.innerWidth > 1439) return;
		const handlerOnCloseWindow = () => {
			setIsOpen(false);
		};

		window.addEventListener('click', handlerOnCloseWindow);

		return () => {
			window.removeEventListener('click', handlerOnCloseWindow);
		};
	}, [setIsOpen]);

	return (
		<>
			<Logo />
			<Title />
			<BtnNewBoard />
			<BoardsList />
			<Help />
			<BtnLogout />
		</>
	);
};
