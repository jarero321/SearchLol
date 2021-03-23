import styled from "styled-components";
import {Colors} from "../styles/Colors";
import Search from "../img/Search.svg";

export const SectionSearch = styled.section`
    width: 100%;
    height:100%;
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    h2{
        font-family: "Prestige";
        color:${Colors.letters};
        font-size:20px;
        word-spacing:5px;
        margin-top:3%;
    }
`;
export const SearchBarContainer = styled.div`
    width: 100%;
    height:13%;
    display: flex;
    justify-content: space-between;
    input{
        width: 70%;
        height:100%;
        background-color:${Colors.Background};
        border: 2px solid ${Colors.main};
        color:${Colors.letters};
        font-family:"Prestige";
        font-size:38px;
        text-align:center;
        &::placeholder{
             color:${Colors.letters};
             font-family:"Prestige";
             font-size:38px;
        }
    }
    button{
        width: 25%;
        height:100%;
        background-color:${Colors.main};
        outline:none;
        border:none;
        &:before{
            content:url(${Search});
            width:90%;
            height:90%;

        }

    }
`;
export const Item1 = styled.img`
    width: 100%;
`;
export const TablaChamps = styled.div`
    width: 100%;
    height:50%;
    overflow-x:scroll;
    display:flex;
    position:relative;
    top:10%;
    ::-webkit-scrollbar {
    width: 12px;
}
    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}
    ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}
    @media (min-width: 1200px){
        top:5%;
    }

`;
export const Element = styled.div`
    width:100%;
    height:100%;
    color:${Colors.letters};
    font-size:20px;
    margin-left:5%;
    img{
        border-radius:50%;
    }
`;
export const ErrorNotification = styled.div`
`;