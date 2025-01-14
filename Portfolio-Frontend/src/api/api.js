import axios from "axios";

const baseURL = `https://personal-website-adx1eyp3n-prashanta11s-projects.vercel.app/api/v1`;

const get = async (url, options) => {
  const response = await axios.get(`${baseURL}/${url}`, options);
  return response.data;
};

const post = async (url, data, options) => {
  const response = await axios.post(`${baseURL}/${url}`, data, options);
  return response.data;
};

export { get, post };
