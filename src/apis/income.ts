import axios from 'axios';
import type { APIIncomeRow } from '../types/types';

const BASE_URL = "http://localhost:8080/api/v1/income/";
const now = new Date();
const month = now.toLocaleDateString("default", { month: "numeric"});
const year = now.getFullYear();

export const getIncomeByYearMonth = async () => {
    return await axios.get(`${BASE_URL}getIncomeByYearMonth?year=${year}&month=${month}`);
}

export const setIncome = async (income : APIIncomeRow) => {
    return await axios.post(`${BASE_URL}setIncome`, income);
}