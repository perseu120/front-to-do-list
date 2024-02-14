import styled from 'styled-components';

export default function IconComponet({Icons, Color, Size }){

    return(
        <Icon>
            {<Icons  color= {Color} size= {Size} />}
        </Icon>

    );
}

const Icon = styled.div`
    display: flex;
`;