import axios from "axios";
const api_key = process.env.REACT_APP_API_KEY;

export default {
    // Searches for books on Google Books by keyword
    searchBooks: function(searchValue) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=${api_key}`);
    },
    // Searches for book on Google Books by ID
    searchBook: function(searchId) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes/${searchId}?key=${api_key}`)
    },
    // Gets all books
    getBooks: function() {
        return axios.get("http://localhost:3000/api/books/");
    },
    // Saves a book to the database
    saveBook: function(bookData) {
        console.log("BOOK DATA LOOK AT ME!!!!:", bookData);
        return axios.post("/api/books/", bookData);
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
}