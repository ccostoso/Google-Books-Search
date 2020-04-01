import React from "react";
import { Container } from "../../UniversalComponents/Grid";
import { ResultsCard } from "../ResultsCard";

export const ResultsBox = ({ results }) => {
    return (
        <Container>
            {results.map(result => <ResultsCard
                result={result}
                key={result.id}
                />
            )
            }
        </Container>
    )
}