import axios from "axios";

export default axios.create({
  APIKEY: "02b7ed9b81771c4cfde3c70100fa66bd1150dcc9894613349ed2bf7818a583a1",

  baseURL: "http://localhost:8000/api/v1",
  headers: {
    Authorization:
      "9c80958b09321e399258024c72defe8336bc4e3e3f3fdf9b2f619ca38e5e8978",
    "Content-Type": "multipart/form-data",
  },
});
