import axios from 'axios';
import Global from '../Global';

const baseUrl = Global.url;

const getPoke = async (name) => {
  try {
    const response = await axios.get(`${baseUrl}pokemon/${encodeURIComponent(name.toLowerCase())}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error;
  }
};

export default getPoke;