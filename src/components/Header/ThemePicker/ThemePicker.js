/** @format */

import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from 'constants/theme';

import { IconThemeMenu, PopupBlock, PopupItem, Text, Wrapper } from './ThemePicker.styled';

const ThemePicker = () => {
	const dispatch = useDispatch();

	const activeUserTheme = useSelector;
	const [isShownPopup, setIsShownPopup] = useState(false);
	const themeRef = useRef();

	const handleTheme = theme => {
		dispatch({ theme });

		setIsShownPopup(false);
	};

	const handleOutsideClick = event => {
		const path = event.composedPath();

		if (!path.includes(themeRef.current)) {
			setIsShownPopup(false);
		}
	};

	useEffect(() => {
		document.body.addEventListener('click', handleOutsideClick);

		return () => {
			document.body.removeEventListener('click', handleOutsideClick);
		};
	}, []);

	const handlePopup = () => setIsShownPopup(!isShownPopup);

	return (
		<Wrapper ref={themeRef} onClick={handlePopup}>
			<Text>Theme</Text>
			<IconThemeMenu name='chevron-down' />
			{/* isOpen={isShownPopup} реакт не розуміє цього, видає помилку консоль */}
			{isShownPopup && (
				<PopupBlock>
					{theme.map(({ name }) => (
						<PopupItem
							onClick={() => handleTheme(name)}
							key={name}
							className={activeUserTheme === name ? 'active' : ''}
						>
							{name[0].toUpperCase() + name.slice(1)}
						</PopupItem>
					))}
				</PopupBlock>
			)}
		</Wrapper>
	);
};

export default ThemePicker;
