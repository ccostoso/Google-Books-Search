import axios from "axios";

export default {
    // Gets all books
    searchBooks: function (searchValue) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyCA7K2OiqwryC4H6PzM8jannybljBnjrI8`);
    },
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
}