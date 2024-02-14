import styled from "styled-components";

export default function Header({children}){
    return(
        <Container>
            <H1>{children}</H1>
        </Container>
    );
}

const Container = styled.header`

    min-height: 9vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #383c42;

`
const H1 = styled.h1`
    
    font-size: 2.5em;
    color: #fff;

`