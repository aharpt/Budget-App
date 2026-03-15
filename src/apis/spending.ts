import axios from 'axios';
import type { APIBudgetRow } from '../types/types';

const BASE_URL = "http://localhost:8080/api/v1/spending/";
const now = new Date();
const month = now.toLocaleDateString("default", { month: "numeric"});
const year = now.getFullYear();

export const getSpendingByYearMonth = async () => {
    return await axios.get(`${BASE_URL}getSpendingByYearMonth?year=${year}&month=${month}`);
}

export const setSpending = async (spending : APIBudgetRow) => {
    return await axios.post(`${BASE_URL}setSpending`, spending);
}