import axios from 'axios';
import { Country } from '../models/Country';

const API_URL = import.meta.env.VITE_API_URL || '';

class CountryService {
  async getCountries(): Promise<Country[]> {
    try {
      const response = await axios.get<Country[]>(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error al obtener países:', error);
      return [];
    }
  }
}

export const countryService = new CountryService();
