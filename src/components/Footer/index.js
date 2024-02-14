import { Link } from "react-router-dom";
import styled from "styled-components";


export default function Footer(){
    return(
        <Container>
            <span> Ainda não tem uma conta? <Link to="/register"><a href="#">Cadastre-se</a></Link> </span>
        </Container>
    );
};

const Container = styled.footer`
    width: 100%;
    margin-top:5%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;