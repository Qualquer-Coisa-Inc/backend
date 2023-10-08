import axios from 'axios';

const baseURL = "https://restcountries.com/v3.1/name/";
const withBaseURL = (path: string) => `${baseURL}/${path}`

export const searchCountry = async (country: string) => {
  const data = await axios.get(withBaseURL(country));
  return data;
}