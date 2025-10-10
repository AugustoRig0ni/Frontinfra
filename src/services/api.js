import axios from 'axios';

// Altere a URL base para o endereço e porta do seu backend
const api = axios.create({
  baseURL: 'http://localhost:3000', // se o backend estiver rodando nessa porta
});

export default api;
