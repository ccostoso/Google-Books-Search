import React from "react";
import { Container } from "../../UniversalComponents/Grid";
import { ResultsCard } from "../ResultsCard";

export const ResultsBox = ({ results, formatAuthors }) => {
    return (
        <Container>
            <div className="card p-4 my-4">
                <h5>Results</h5>
                {results.map(result => <ResultsCard
                    key={result.id}
                    result={result}
                    formatAuthors={formatAuthors}
                />
                )
                }
            </div>
        </Container>
    )
}