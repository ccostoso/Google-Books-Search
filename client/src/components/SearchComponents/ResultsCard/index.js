import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Row, Col } from "../../UniversalComponents/Grid";
// import { ViewBtn, SaveBtn } from "../ResultsCardBtn";

export const ResultsCard = ({result, formatAuthors}) => {
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
                        />
                        <SaveBtn
                            id={result.id}
                            onClick={handleSaveClick}
                        /> */}
                    </Col>
                </Row>
                <Row>
                    {console.log(result)}
                    <Col size="md-2">
                        <img src={result.image} alt={result.title}></img>
                    </Col>
                    <Col size="md-10">
                        {result.description}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}