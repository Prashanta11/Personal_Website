import axios from "axios";

const baseURL = `https://backend-five-neon.vercel.app/api/v1`;
// const baseURL = `https://personal-website-adx1eyp3n-prashanta11s-projects.vercel.app/api/v1`;
// const baseURL = `http://localhost:5000/api/v1`;

const get = async (url, options) => {
  const response = await axios.get(`${baseURL}/${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    ...options,
  });
  return response.data;
};

const post = async (url, data, options) => {
  const response = await axios.post(`${baseURL}/${url}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    options,
  });
  return response.data;
};

export { get, post };
