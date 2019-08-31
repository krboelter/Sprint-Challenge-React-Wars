import React from "react";
import styled from "styled-components";

const Person = (props) => {

    const Header = styled.h2`
        font-family: 'Orbitron', sans-serif;
        padding: 5px;
    `

    const Birth = styled.p`
        font-size: 18px;
        padding: 0 10px;
    `

    return (
        <div>
            <Header>{props.name}</Header>
            <Birth>Born: {props.age}</Birth>
        </div>
    )
}

export default Person