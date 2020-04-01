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

        const { searchValue } = this.state.searchValue;

        API.searchBooks(searchValue)
            .then(res => {
                const { items: resArr } = res.data;
                const results = [];
                resArr.forEach(item => {
                    const { title, authors: author, previewLink: link,  } = item.volumeInfo;
                    const { thumbnail: image } = item.volumeInfo.imageLinks;
                    const description = item.volumeInfo.searchInfo.textSnippet;

                    const result = {
                        title: title,
                        author: author,
                        link: link,
                        image: image,
                        description: description,
                    }

                    results.push(result);
                });


                this.setState({
                    results: results,
                });
            })
            .catch(err => console.log(err));
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