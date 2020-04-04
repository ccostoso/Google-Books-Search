import React from "react";
import { Container } from "../../UniversalComponents/Grid";
import { SavedResultsCard } from "../SavedResultsCard";

export const SavedResultsBox = ({ results, handleClick, formatAuthors }) => {
    return (
        <Container>
            <div className="card p-4 my-4">
                <h5>Saved</h5>
                <hr />
                {results.map(result => <SavedResultsCard
                    key={result.id}
                    result={result}
                    formatAuthors={formatAuthors}
                    handleClick={handleClick}
                />
                )
                }
            </div>
        </Container>
    )
}