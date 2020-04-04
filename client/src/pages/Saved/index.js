import React, { Component } from "react";
import { SavedResultsBox } from "../../components/SavedComponents/SavedResultsBox";
import API from "../../utils/API";

class Saved extends Component {
    state = {
        results: [{
            title: "title",
            author: ["author1", "author2"],
            description: "A description",
            img: "",
            link: "http://google.com",
        }]
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => {
                this.setState({
                    results: res.data,
                })
            })
            .catch(err => console.log(err));
    }

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => {
                this.loadBooks();
            })
            .catch(err => console.log(err))
    }

    handleClick = e => {
        const { id } = e.target

        e.preventDefault();

        this.deleteBook(id);
    }

    formatAuthors = authors => {
        if (typeof authors === "object") {
            return authors.length > 1 ? authors.join(", ") : authors[0];
        }
        
        return authors;
    }

    render() {
        return (
            <div>
                <SavedResultsBox
                    results={this.state.results}
                    handleClick={this.handleClick}
                    formatAuthors={this.formatAuthors}
                />
            </div>
        )
    }
}

export default Saved;