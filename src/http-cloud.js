import axios from "axios";

export default axios.create({
  APIKEY: "vCeTQsh5peqH2yXgHZj1V07gMNWtqEin",

  baseURL: "https://api.securitytrails.com/v1",
  headers: {
    APIKEY: "vCeTQsh5peqH2yXgHZj1V07gMNWtqEin",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
