import React, { Component } from "react";
import { SavedBox } from "../../components/SavedComponents/SavedBox";
import API from "../../utils/API";

class Saved extends Component {
    state = {
        results =[]
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

    handleClick(e) {
        const { id } = e.target

        e.preventDefault();

        this.deleteBook(id);
    }

    render() {
        <SavedBox
            results={this.state.results}
            handleClick={this.handleClick}
        />
    }
}

export default Saved;