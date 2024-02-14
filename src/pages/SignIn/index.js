import styled from "styled-components";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Inputs from "../../components/Inputs";
import Input from "../../components/Input";
import { useState } from "react";

export default function SignIn(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    return(

        <Main>
            <Form>
                <Header>Tela Login</Header>
                <Inputs>
                    <Input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="example@gmail.com"></Input>

                    <PasswordContainer>
                        <Input value={senha} onChange={(e)=>{setSenha(e.target.value)}} type="password" placeholder="**********"></Input>
                    </PasswordContainer>
                </Inputs>
                <Button>Login</Button>
                <Footer></Footer>
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

const PasswordContainer = styled.div`
    margin-top: 5%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(#18acfe, #0166e1);

    display: flex;
    justify-content: center;
    box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.25);   
`