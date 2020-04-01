import React, { Component } from "react";
import { SearchBox } from "../../components/SearchComponents/SearchBox";
import { ResultsBox } from "../../components/SearchComponents/ResultsBox";
import API from "../../utils/API";

class Search extends Component {
    state = {
        searchValue: "Insert a book title here",
        results: [],
    }

    componentDidMount() {
        
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });

        console.log(this.state.searchValue);
    }

    handleClick = event => {
        event.preventDefault();

        const { searchValue } = this.state;
        console.log(searchValue);

        API.searchBooks(searchValue)
            .then(res => {
                const { items } = res.data;
                console.log(items);
                const results = [];
                items.forEach(item => {
                    const { title, authors: author, previewLink: link } = item.volumeInfo;
                    const image = item.volumeInfo.imageLinks ?  item.volumeInfo.imageLinks.smallThumbnail : "";
                    const { id } = item;
                    const description = item.searchInfo ? item.searchInfo.textSnippet : "No description provided";
                    const result = {
                        title: title,
                        author: author,
                        link: link,
                        image: image,
                        description: description,
                        id: id,
                    }

                    results.push(result);
                });


                this.setState({
                    results: results,
                });

                console.log(this.state.results);
            })
            .catch(err => console.log(err));
    }

    formatAuthors = authors => {
        if (typeof authors === "string") {
            return authors.length > 1 ? authors.join(", ") : authors[0];
        }
        
        return authors;
    }

    render() {
        return (
            <div>
                <SearchBox
                    value={this.state.searchValue}
                    handleClick={this.handleClick}
                    handleChange={this.handleChange}
                />
                <ResultsBox
                    results={this.state.results}
                    formatAuthors={this.formatAuthors}
                />
            </div>
        )
    }
}

export default Search;