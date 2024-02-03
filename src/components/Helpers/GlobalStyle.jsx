/** @format */

import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        font-weight: 400;
        font-style: normal;
        src: url('https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2') format('woff2');
    }

    @font-face {
        font-family: 'Poppins';
        font-weight: 500;
        font-style: normal;
        src: url('https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z11lFd2JQEl8qw.woff2') format('woff2');
    }


    @font-face {
        font-family: 'Poppins';
        font-weight: 600;
        font-style: normal;
        src: url('https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2') format('woff2');
    } 

    body {
        font-family: 'Poppins', sans-serif; 
        margin: 0;
        padding: 0;
    }
`;
