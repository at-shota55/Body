import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
    return (
        <HeaderComponent>
            <LinkButton>
                <Link to="/app">前画面へ</Link>
            </LinkButton>            
            <MainTitle>Discover Stretch</MainTitle>
        </HeaderComponent>
    )
};

const HeaderComponent = styled.div`
    padding: 5vh 6vw 5vh 6vw;
    background-color: rgba(136,181,211,0.7);
`;

const LinkButton = styled.button`
    left: 4.5vh;
    top: 4.5vh;
    position: absolute;
    background-color: transparent;
`;

const MainTitle = styled.h1`
    font-size: 25px;
    color: #FFFFFF;
    font-family: 'Montserrat Subrayada', sans-serif;
`;


export default Header;