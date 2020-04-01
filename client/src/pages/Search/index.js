import React, { Component } from "react";
import SearchBox from "../../components/SearchComponents/SearchBox";
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
    }
}

export default Search;