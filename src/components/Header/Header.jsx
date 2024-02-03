/** @format */

import PropTypes from "prop-types";
import sprite from '../Icon/icon-spraite.svg'
import {
  StyledHeader,
  Wrapper,
  AvatarImg,
  UserName,
  StyledSvgBurger,
  ButtonBurger,
} from "./Header.styled";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import Modal from '../Modal/Modal'
import { ThemeSwitcher } from "../Theme/ThemeSwitcher";
import { useState } from "react";

export const Header = ({ openSidebar, isOpen }) => {
  const { name, avatarURL } = useSelector(selectUser);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <StyledHeader>
      {!isOpen && (
        <ButtonBurger onClick={openSidebar}>
          <StyledSvgBurger>
            <use href={sprite + "#icon-menu"}></use>
          </StyledSvgBurger>
        </ButtonBurger>
      )}

      <Wrapper>
        <ThemeSwitcher />
        <UserName onClick={handleModalOpen}>{name}</UserName>
        <AvatarImg onClick={handleModalOpen} src={avatarURL} alt="user" />
        {isModalOpen && (
          <Modal onClose={handleModalClose}>
          </Modal>
        )}
      </Wrapper>
    </StyledHeader>
  );
};

Header.propTypes = {
  openSidebar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Header;