import axios from "axios";

// const SECRET_KEY = "f937548ce92c4cccab3e47b760e40b34";
const BASE_URL = "https://newsapi.org/v2";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["x-api-key"] = import.meta.env.VITE_SECRET_KEY;

// console.log(import.meta.env.VITE_SECRET_KEY);

const fetchNews = async () => {
  const response = await axios.get("/everything", {
    params: {
      // apiKey: SECRET_KEY,
      q: "bitcoin",
    },
  });

  console.log(response);
};

// fetchNews();
