import React from "react";
import { Row, Col } from "../../UniversalComponents/Grid";
// import { ViewBtn, SaveBtn } from "../ResultsCardBtn";

export const ResultsCard = result => {
    return (
        <Row>
            <Col size="xs-12" className="card">
                <Row>
                    <Col size="md-6">
                        <Link to={result.link}><h5>{result.title}</h5></Link>
                        Written by {
                            result.author.length > 1 ? result.author : result.author.map(a=> `${a}, `)
                        
                        }
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