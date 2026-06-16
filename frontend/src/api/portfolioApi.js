import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

// Get portfolio by id
export const getPortfolio = (id) => api.get(`/api/portfolios/${id}`);

// Get all portfolios
export const getAllPortfolios = () => api.get('/api/portfolios');

// Always get the first portfolio
export const getMainPortfolio = () =>
  api.get('/api/portfolios').then(res => ({ data: res.data[0] }));