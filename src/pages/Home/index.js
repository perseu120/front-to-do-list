import styled from "styled-components";
import GuestCard from "../../components/GuestCard";
import IconComponet from "../../components/IconComponet";
import Tasks from "../../components/Tasks";
import { IoAddCircleSharp } from "react-icons/io5";


export default function Home(){
    return(
        <>
            <Header>
                <GuestCard/>
                <IconComponet Icons={IoAddCircleSharp} Color={"white"} Size={"5rem"} />
            </Header>
            
            <Tasks></Tasks>
        </>
    );
};

const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 2.5%;
`;