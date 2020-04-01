import React from "react";
import { Input, FormBtn } from "../../UniversalComponents/Form";
import { Container } from "../../UniversalComponents/Grid";

export const SearchBox = ({ searchValue, handleChange, handleClick }) => {
    return (
        <Container>
            <div className="card p-4 my-4">
                <h5>Book Search</h5>
                <form>
                    <div className=".form-group">
                        <Input
                            value={searchValue}
                            onChange={handleChange}
                            name="searchValue"
                            placeholder="Search for a Book"
                        />
                    </div>
                    <FormBtn
                        disabled={searchValue}
                        onClick={handleClick}
                    >
                        Search
                </FormBtn>
                </form>
            </div>
        </Container>
    )
};