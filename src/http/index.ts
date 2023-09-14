import axios from "axios";

const http = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
});

export default http;
