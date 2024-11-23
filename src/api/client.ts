import axios from 'axios';

const API_KEY =
  process.env.POLYGON_API_KEY || 'TINCaMq866MulC7fQQC48lH6s2sB02rJ';

export const client = axios.create({
  baseURL: 'https://api.polygon.io/v3',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
