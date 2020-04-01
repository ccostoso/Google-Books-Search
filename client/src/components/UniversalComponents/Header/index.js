import React from "react";
import { Container } from "../Grid";
import { Jumbotron } from "../Jumbotron";
import { Nav } from "../Nav";

export const Header = props => {
    return (
        <Container>
            <Nav></Nav>
            <Jumbotron fluid>
                <h1></h1>
            </Jumbotron>
        </Container>
    )
}