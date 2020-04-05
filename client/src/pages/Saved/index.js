import React, { Component } from "react";
import { SavedResultsBox } from "../../components/SavedComponents/SavedResultsBox";
import API from "../../utils/API";

class Saved extends Component {
    state = {
        results: [],
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

    handleDelete = e => {
        e.preventDefault();

        const { value } = e.target;

        API.deleteBook(value)
        .then(res => {
            this.loadBooks();
        })
        .catch(err => console.log(err))
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
                    handleDelete={this.handleDelete}
                    formatAuthors={this.formatAuthors}
                />
            </div>
        )
    }
}

export default Saved;