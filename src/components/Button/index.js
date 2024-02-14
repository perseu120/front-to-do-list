import styled from "styled-components";

export default function Button({Color, children}){
    return(
        <Container Color={Color}>
            {children}
        </Container>
    );
}
const Container = styled.button`
    background-color: ${props => props.Color || "#18acfe"};
    width: 90%;
    height: 50px;
    border: 0;
    outline: 0;
    border-radius: 12px;
    margin-top: 5%;
    font-size:  1.6em;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3 ease-in-out;
`