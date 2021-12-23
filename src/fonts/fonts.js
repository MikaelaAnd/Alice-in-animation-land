import { createGlobalStyle } from "styled-components";
import TitleFontWoff from './EagleLake.woff';
import TitleFontWoff2 from './EagleLake.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'TitleFont';
        src: local('TitleFont'), local('Title Font'),
        url(${TitleFontWoff2}) format('woff2'),
        url(${TitleFontWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;