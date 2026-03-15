import axios from 'axios';
import type { APIBudgetRow } from '../types/types';

const BASE_URL = "http://localhost:8080/api/v1/debt/";
const now = new Date();
const month = now.toLocaleDateString("default", { month: "numeric"});
const year = now.getFullYear();

export const getDebtByYearMonth = async () => {
    return await axios.get(`${BASE_URL}getDebtByYearMonth?year=${year}&month=${month}`);
}

export const setDebt = async (debt : APIBudgetRow) => {
    return await axios.post(`${BASE_URL}setDebt`, debt);
}