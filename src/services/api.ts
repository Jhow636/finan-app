import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:3333' -> Quando estive em local host é ideal utilizar o IP da máquina
  baseURL: 'http://192.168.100.59:3333',
});

export default api;
