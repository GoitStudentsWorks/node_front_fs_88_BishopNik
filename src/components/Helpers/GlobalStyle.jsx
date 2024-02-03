/** @format */

import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        font-weight: 400;
        font-style: normal;
        src: url('../../fonts/Poppins-Regular.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Poppins';
        font-weight: 500;
        font-style: normal;
        src: url('../../fonts/Poppins-Medium.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Poppins';
        font-weight: 600;
        font-style: normal;
        src: url('../../fonts/Poppins-SemiBold.ttf') format('truetype');
    } 

    body {
        font-family: 'Poppins', sans-serif; 
        margin: 0;
        padding: 0;
    }
`;
