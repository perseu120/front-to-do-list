import styled from "styled-components";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Inputs from "../../components/Inputs";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUp(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");
  
    function login() {
        const body = {
        email,
        senha
        }

        const promise = axios.post("https://my-wallet1.herokuapp.com/login", body);

        promise.then((response) => {
        
        })
        promise.catch((err) => { alert("erro ao realizar login"); })
  
    }

    

    console.log(senha);

    return(

        <Main>
            <Form>
                <Header>Criar Conta</Header>
                <Inputs>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@gmail.com"></Input>
                    <Input value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="digite uma senha"></Input>
                    <Input value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} type="password" placeholder="confirme sua senha"></Input>
                </Inputs>
                <Button>Registrar</Button>
                <StyledLink to="/">Já está inscrito? Faça login</StyledLink>
            </Form>
        </Main>
  
    );
}

const Form = styled.form`
    margin-top: 5%;
    width: 35%;
    height: 75vh;
    background-color: #383c42;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.4) inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    padding: 2%;

    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledLink = styled(Link)`
    margin-top: 5%;
`
const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(#18acfe, #0166e1);

    display: flex;
    justify-content: center;
    box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.25);   
`