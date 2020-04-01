import React from "react";
import { Input, FormBtn } from "../../UniversalComponents/Form";
import Grid, { Container } from "../../UniversalComponents/Grid";

export const SearchBox = ({ searchValue, handleChange, handleClick }) => {
    return (
        <Container>
            <form>
                <div className=".form-group">
                    <label for="#search-input">Book</label>
                    <Input
                        value={searchValue}
                        onChange={handleChange}
                        name="title"
                        placeholder="Search for a Book"
                    />
                </div>
                <FormBtn
                    disabled={!searchValue}
                    onChange={handleClick}
                >
                    Search
                </FormBtn>
            </form>
        </Container>
    )
};