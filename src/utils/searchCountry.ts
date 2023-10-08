import axios from 'axios';

const baseURL = "https://restcountries.com/v3.1/name";
const withBaseURL = (path: string) => `${baseURL}/${path}`

export const searchCountry = async (country: string) => {
  try {
    const { data } = await axios.get(withBaseURL(country));
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados do país:', error);
    throw error;
  }
}
