import axios from "axios";
import config from "./config";

export default {
    // Gets all books
    searchBooks: function (searchValue) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=${config.apiKey}`);
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