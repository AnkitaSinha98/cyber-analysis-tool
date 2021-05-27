import axios from "axios";

export default axios.create({
  APIKEY: "AIzaSyCYkU23Ptn3lLQEQJhCEgsDWQ9i10VWfWM",
  baseURL: "https://safebrowsing.googleapis.com/v4",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});
