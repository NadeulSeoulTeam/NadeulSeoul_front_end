import { createGlobalStyle } from 'styled-components';

import SUITWoff2 from './SUIT-Regular.woff2';
import HahmletWoff from './Hahmlet-ExtraBold.woff';
import HahmletWoff2 from './Hahmlet-ExtraBold.woff2';

export default createGlobalStyle`
    @font-face {
    font-family: "Suit";
    src: local("Suit"),
    url(${SUITWoff2}) format("woff2");
    font-weight: 400;
    font-style: normal;
    }

    @font-face {
        font-family: "Hahmlet";
        src: local("Hahmlet"), local("Hahmlet"),
        url(${HahmletWoff2}) format("woff2"),
        url(${HahmletWoff}) format("woff");
        font-weight: 700;
        font-style: normal;
    }
`;
