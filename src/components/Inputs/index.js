import styled from "styled-components";


export default function Inputs({children}){
    return(
        <>
            <Section>
                {children}
            </Section>
        </>

           
    );
}

const Section = styled.section`
    margin-top: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`