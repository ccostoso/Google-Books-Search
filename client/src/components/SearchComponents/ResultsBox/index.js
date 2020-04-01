import React from "react";
import { Container, Row } from "../../UniversalComponents/Grid";

export const ResultsBox = ({ results }) => {
    return (
        <Container>
            {results.map(result=> {
                <Row></Row>
            })}
        </Container>
    )
}