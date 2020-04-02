import axios from "axios";
import config from "./config";

export default {
    // Searches for books on Google Books by keyword
    searchBooks: function(searchValue) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=${config.apiKey}`);
    },
    // Searches for book on Google Books by ID
    searchBook: function(searchId) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes/${searchId}?key=${config.apiKey}`)
    },
    // Gets all books
    getBooks: function() {
        return axios.get("/api/books/");
    },
    // Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books/", bookData);
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
}