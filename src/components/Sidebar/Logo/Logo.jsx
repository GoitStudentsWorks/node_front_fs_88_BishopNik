import React from 'react';
import {
  LogoContainer,
  LogoText,
  LogoIcon,
  IconContainer,
} from './Logo.styled';

export const Logo = () => {
  return (
    <LogoContainer>
      <IconContainer>
        <LogoIcon name="iconapp" />
      </IconContainer>
      <LogoText>Task Pro</LogoText>
    </LogoContainer>
  );
};
