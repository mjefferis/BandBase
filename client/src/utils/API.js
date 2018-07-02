import axios from "axios";

export default {
  // Gets all books
  getBands: function() {
    return axios.get("/api/bands");
  },
  // Gets the book with the given id
  getBand: function(id) {
    return axios.get("/api/bands/" + id);
  },
  // // Deletes the book with the given id
  // deleteBand: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  saveBand: function(bandData) {
    return axios.post("/api/bands", bandData);
  },
  userLogin: function(userData) {
    return axios.post("/auth/login", userData);
  }
};
