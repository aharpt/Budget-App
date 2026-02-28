import axios from 'axios';

const BASE_URL = "http://localhost:8080";

export const getIncomeByYearMonth = () => {
    return axios.get(`${BASE_URL}/api/v1/income/getIncomeByYearMonth?year=2026&month=2`)
    .then(function (response) {
    // handle success
    return response?.data;
  })
  .catch(function (error) {
    // handle error
    console.error("Error:" + error);
  });
}