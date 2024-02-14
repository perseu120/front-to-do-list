import styled from "styled-components";
import { FaRegSquareCheck } from "react-icons/fa6";
import { MdOutlineEditNote } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import IconComponet from "../IconComponet";

export default function Tasks(){

    return(
        <>
           <Task>
                <Container>
                    <CheckContainer>
                        <IconComponet Icons= {FaRegSquareCheck} Color = 'DFBD43' Size='1.5rem' ></IconComponet>
                    </CheckContainer>

                    <TaskTitle>
                            <Text> 8:00</Text>
                            <Text>Minha primeira tarefa</Text>
                    </TaskTitle>

                    <ActionControls>
                        <IconComponet Icons= {MdOutlineEditNote} Color = 'DFBD43' Size='2rem' ></IconComponet>
                        <IconComponet Icons= {MdDelete} Color = 'DFBD43' Size='2rem' ></IconComponet>
                    </ActionControls>

                </Container>              
           </Task>
        </>
    );
}
const Container = styled.div`

    display: flex;
    align-items: center;
    height: 100%;
`
const Text = styled.p`
    height: 50%;
    color: #fff;
    font-size: 2rem;
`

const TaskTitle = styled.div`
    height: 100%;
    width: 80%;
    overflow: hidden;
`
const ActionControls = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 10%;
`
const CheckContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 10%;
`

const Task = styled.div`

    height: 6rem;
    border: 3px;
    margin: 2rem;
    border-radius: 2em;
    border-style: solid;
    border-color: #fff;
   
`;