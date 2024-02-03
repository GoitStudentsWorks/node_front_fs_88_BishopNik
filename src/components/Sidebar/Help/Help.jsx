import React from 'react';
import Cactus from '../../../img/Cactus.png';
import {
  HelpContainer,
  HelpText,
  BtnHelp,
  HelpIcon,
  HelpBtnText,
  HelpSpanText,
  HelpImgDiv,
} from './Help.styled';

export const Help = () => {
  return (
    <HelpContainer>
      <HelpImgDiv>
        <img src={Cactus} alt="Cactus" width={54} />
      </HelpImgDiv>
      <HelpText>
        If you need help with <HelpSpanText>TaskPro</HelpSpanText>, check out
        our support resources or reach out to our customer support team.
      </HelpText>
      <BtnHelp>
        <HelpIcon name="help" />
        <HelpBtnText>Need help?</HelpBtnText>
      </BtnHelp>
    </HelpContainer>
  );
};
