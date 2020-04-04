import React from "react";
import { Row, Col } from "../../UniversalComponents/Grid";
import { FormBtn } from "../../UniversalComponents/Form";
// import { ViewBtn, SaveBtn } from "../ResultsCardBtn";

export const SavedResultsCard = ({ result, handleSave, formatAuthors }) => {
    return (
        <Row>
            <Col size="md-12" className="card p-3 my-1">
                <Row className="mb-2">
                    <Col size="md-6">
                        <a href={result.link}><h5>{result.title}</h5></a>
                        Written by {formatAuthors(result.author)}
                    </Col>
                    <Col size="md-6">
                        {/* <ViewBtn
                            id={result.id}
                            onClick={handleViewClick}
                        />*/}
                        <div className="d-flex justify-content-end">
                            <a className="btn btn-info mr-1"
                                href={result.link}
                                alt="View at Google Books"
                            >
                                Google Books
                            </a>
                            <FormBtn
                                onClick={handleSave}
                                {...result}
                            >
                                Save
                            </FormBtn>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {console.log(result)}
                    <Col size="md-2">
                        <img src={result.image} alt={result.title}></img>
                    </Col>
                    <Col size="md-10">
                        <p>{result.description}</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}