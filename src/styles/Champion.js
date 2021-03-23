import styled from "styled-components";
import {Colors} from "../styles/Colors.js"
import {Link} from "react-router-dom";

export const Section = styled.section`
    width: 100vw;
    height: 210vh;
    background-color:${Colors.Background};
    @media (min-width: 1200px){
        height:230vh;
    }

`
export const ContainerChamp = styled.div`
    width:90%;
    height:70%;
    margin: 0 auto;
    display:flex;
    flex-direction:column;
    @media (min-width:768px){
        height:100%;
    }
    @media (min-width:1200px){
        height:100%;
    }
`;
export const ImgChampion = styled.div`
    order:2;
    margin-top:15%;
    width:100%;
    height:40%;
    background-image:url(${props => props.champion && `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.champion}_0.jpg`});
    background-size:cover;
    background-repeat:no-repeat;
    @media (min-width:768px){
        height:20%;
        background-image:url(${props => props.champion && `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.champion}_0.jpg`});
        background-size:contain;
    }
    @media ( min-width:809px){
        height:100%;
        width: 90% ;
        position:relative;
        left:4%;
    }
    @media (min-width:1200px){
        width:90%;
        height:30%;
        margin-top:0%;
        background-size:cover;
    }
`;
export const TitleChamp = styled.header`
    order:0;
    margin-top:20%;
    position:relative;
    h1{
        width:100%;
        height:35%;
        color:${Colors.main};
        font-family:"Prestige";
        text-align:center;
        &:before{
            content:"";
            width:90%;
            height:0.5%;
            position:absolute;
            background-color:${Colors.main};
            top:50%;
            left:5%;
        }
    }
    h2{
        margin-top:5%;
        color:${Colors.main};
        font-family:"Prestige";
        text-align:center;
    }
    @media (min-width:768px){
        h1{
            font-size:50px;
        }
        h2{
            font-size:40px;
        }
    }
    @media (min-width:809px){
        margin-top:10%;
    }
`;
export const InfoChamp = styled.header`
    width:100%;
    height:40%;
    text-align:center;
    position:relative;
    order:3;
    p{
        color:${Colors.letters};
        margin-top:15%;
        width:90%;
        margin-left:5%;
        font-size:20px;
        line-height:1.2;
        text-align:justify;
    }
    h2{
        color:${Colors.main};
        font-family:"Prestige";
        margin-top:5%;
    }
    @media (min-width:768px){
        p{
            font-size:30px;
        }
        h2{
            font-size:30px;
        }
    }
    @media (min-width:809px){
        p{
            margin-top:5%;
        }
    }
    @media (min-width:1200px){
        height:30%;
        p{
            font-size:25px;
        }
        h2{
            font-size:25px;
        }
    }
`;
export const Role = styled.div`
    position:relative;
    margin-top:15%;
    @media (min-width:809px){
        margin-top:0;
    }
`;
export const Rol = styled.div`
    display: flex;
    justify-content:space-around;
    color:${Colors.main};
    width:100%;
    h3{
        font-family:"Prestige";
        margin-top:5%;
    }
    &:before{
            content:"";
            width:90%;
            height:0.5%;
            position:absolute;
            background-color:${Colors.main};
            top:55%;
            left:5%;
        }
        @media (min-width:768px){
            h3{
                font-size:30px;
            }
        }
        @media (min-width:1200px){
            h3{
                font-size:25px;
            }
        }
`;
export const Habilidades = styled.div`
    position:relative;
    width:100%;
    height:30%;
    margin-top:20%;
    &:before{
            content:"";
            width:90%;
            height:0.5%;
            position:absolute;
            background-color:${Colors.main};
            top:25%;
            left:5%;
        }
    @media (min-width:809px){
        height:20%;
        margin-top:0;
    }
    @media (min-width:1200px){
        height:30%;
    }
`;
export const ContainerHabilidades = styled.div`
    width:100%;
    height:20%;
    margin-top:8%;
    img{
        width:15%;
        border-radius:50%;
        margin-left:5%;
    }
    @media (min-width:809px){
        img{
            width:10%;
        }
    }
    @media (min-width:1200px){
        img{
            width:8%;
        }
        position:relative;
        bottom:35%;
    }
`;
export const Back = styled(Link)`
width:30%;
position:fixed;
display:block;
left:10%;
top:5%;
height:5%;
border: 2px solid ${Colors.main};
background-color:${Colors.main};
color:${Colors.letters};
text-decoration:none;
font-family:"Prestige";
display:flex;
align-items:center;
justify-content:center;
z-index:20;
@media (min-width:768px){
    width:10%;
}
`;