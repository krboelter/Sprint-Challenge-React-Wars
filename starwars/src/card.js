import React from "react";
import styled from "styled-components";
import Person from "./person";
// import styled from "styled-components"

const CreateCard = (props) => {

    const Container = styled.div`
        width: 25%;
        background: gray;
        text-align: left;
        margin: 30px 20px;
        border-radius: 8px;
        box-shadow: 2px 2px 5px black;
    `

    return (
        <Container>
            <Person name={props.name} age={props.age} />
        </Container>
    )
};

export default CreateCard