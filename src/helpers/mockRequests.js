import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5050',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'application/json' }
});

const getCards = (annualIncome, employmentStatus) => {
  return instance.get('/cards', {
    params: {
      annualIncome: annualIncome,
      employmentStatus: employmentStatus
    }
  });
};

export default getCards;
