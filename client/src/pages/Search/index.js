import React, { Component } from "react";
import { SearchBox } from "../../components/SearchComponents/SearchBox";
import { ResultsBox } from "../../components/SearchComponents/ResultsBox";
import API from "../../utils/API";

class Search extends Component {
    state = {
        searchValue: "",
        results: [],
    }

    handleChange(e) {
        const { value } = e.target;
        this.setState({
            searchValue: value,
        });
    }

    handleClick(e) {
        e.preventDefault();
    }

    render() {
        <SearchBox 
            searchValue={this.state.searchValue}
            onClick={this.handleClick}
            onChange={this.handleChange}
        />
        <ResultsBox 
            results={this.results}
        />
    }
}

export default Search;