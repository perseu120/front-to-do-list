import styled from "styled-components";

export default function Input({value, onChange, type, placeholder}){

    return(
        <ContainerInput value={value} onChange={onChange} Type={type} Placeholder={placeholder || ""}>
        </ContainerInput>
    );
}

const ContainerInput = styled.input`
    width: 90%;
    height: 40px;
    padding: 8px 15px;
    margin-top: 5%;
    border: 0;
    outline: 0;
    border-radius: 12px;
    font-size: 16px;
    color: #312e42;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
`