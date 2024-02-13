/** @format */

import React, { useState, useRef, useEffect, useContext } from 'react';
// import {useDispatch} from 'react-redux'
import {  useSelector } from 'react-redux';
import { ThemeContext } from 'components/Helpers';
import { IconThemeMenu, PopupBlock, PopupItem, Text, Wrapper } from './ThemePicker.styled';
import { theme } from 'constants/theme';

const ThemePicker = () => {
	const { setTheme } = useContext(ThemeContext);
	// const dispatch = useDispatch()
	const activeUserTheme = useSelector;
	const [isShownPopup, setIsShownPopup] = useState(false);
	const themeRef = useRef();

	useEffect(() => {
		document.body.addEventListener('click', handleOutsideClick);

		return () => {
			document.body.removeEventListener('click', handleOutsideClick);
		};
	}, []);

	const handleOutsideClick = event => {
		const path = event.composedPath();

		if (!path.includes(themeRef.current)) {
			setIsShownPopup(false);
		}
	};

	const changeTheme = (property, name)=> {
		setTheme(property);
		// dispatch(changeTheme(name))
	};

	const handlePopup = () => setIsShownPopup(!isShownPopup);

	return (
		<Wrapper ref={themeRef} onClick={handlePopup}>
			<Text>Theme</Text>
			<IconThemeMenu name='chevron-down' />
			{/* isOpen={isShownPopup}  */}
			{isShownPopup && (
				<PopupBlock>
					{theme.map(({ name, property }) => (
						<PopupItem
							onClick={() => changeTheme(property, name)}
							key={name}
							className={activeUserTheme === name ? 'active' : ''}
						>
							{name}
						</PopupItem>
					))}
				</PopupBlock>
			)}
		</Wrapper>
	);
};

export default ThemePicker;