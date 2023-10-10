import axios from 'axios';

const baseURL = "https://restcountries.com/v3.1/all";

export const searchCountry = async () => {
  try {
    const { data } = await axios.get(baseURL);
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados dos países:', error);
    throw error;
  }
}
