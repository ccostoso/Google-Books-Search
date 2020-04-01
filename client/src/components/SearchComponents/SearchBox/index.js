import React from "react";
import { Input, FormBtn } from "../../UniversalComponents/Form";
import { Container } from "../../UniversalComponents/Grid";

export const SearchBox = ({ searchValue, handleChange, handleClick }) => {
    return (
        <Container>
            <form>
                <div className=".form-group">
                    <label htmlFor="#search-input">Book</label>
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
        </Container>
    )
};