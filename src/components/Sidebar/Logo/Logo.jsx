import React from 'react';
import { LogoContainer, LogoText, LogoIcon } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoContainer>
      <LogoIcon name="iconapp" />
      <LogoText>Task Pro</LogoText>
    </LogoContainer>
  );
};
