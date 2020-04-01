import React from "react";
import { Container, Row } from "../../UniversalComponents/Grid";

export const ResultsBox = ({ results }) => {
    return (
        <Container>
            hi
            {results.map(result => result.title)}
        </Container>
    )
}