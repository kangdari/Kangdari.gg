import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'

const globalStyle = createGlobalStyle`
    ${reset};
    
    a{
        text-decoration: none;
        color: inherit;
    }

    *{
        box-sizing: border-box;
    }

    body{
        font-family: "맑은 고딕", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        background-color: #f5f5f5;
        color: black;
    }
`

export default globalStyle;