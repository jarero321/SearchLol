import styled from "styled-components";
import {Colors} from "../styles/Colors";
export const SectionSearch = styled.section`
    display: flex;
    flex-directioN:column;
    width:100vw;
    height:100vh;
    background-color:${Colors.Background};
    text-align:center;

    h1{
        font-family:"Prestige";
        font-size:20px;
        margin-bottom:10%;
        color:${Colors.letters};
        word-spacing:5px;
    }
`;
export const ContainerPage = styled.div`
    width:80%;
    height:60%;
    position:relative;
    top:15%;
    margin:0 auto;
`;