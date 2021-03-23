import { createGlobalStyle } from 'styled-components';
import Prestige from "../fonts/Prestige.otf"
 
const GlobalStyle = createGlobalStyle`
  body {
    background-color:"#000A15";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @font-face {
    font-family: "Prestige";
    src: url(${Prestige});
}
  }
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  html{
    background-color:"#000A15";
    overflow-x:hidden;
  }
`;
 
export default GlobalStyle;