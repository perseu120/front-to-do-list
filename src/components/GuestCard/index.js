import styled from 'styled-components';
import profile from '../../assent/img/patrick.jpg';

export default function GuestCard(){
    return(
        <Guest>
            <img src={profile} alt="imagem perfil" ></img>
        </Guest>
    );
}

const Guest = styled.div`
    justify-content: flex-start;
    margin-top: 3%;
    margin-left: 1.5%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
    }

`;