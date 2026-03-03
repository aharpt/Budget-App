import axios from 'axios';
import type { APIBudgetRow } from '../types/types';

const BASE_URL = "http://localhost:8080/api/v1/savings/";
const now = new Date();
const month = now.toLocaleDateString("default", { month: "numeric"});
const year = now.getFullYear();

export const getSavingsByYearMonth = async () => {
    return await axios.get(`${BASE_URL}getSavingsByYearMonth?year=${year}&month=${month}`);
}

export const setSavings = async (savings : APIBudgetRow) => {
    return await axios.post(`${BASE_URL}setSavings`, savings);
}