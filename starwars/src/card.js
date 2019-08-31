import React from "react";
import Person from "./person";
// import styled from "styled-components"

const CreateCard = (props) => {

    return (
        <div>
            <Person name={props.name}/>
        </div>
    )
};

export default CreateCard