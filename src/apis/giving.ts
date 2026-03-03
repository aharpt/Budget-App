import axios from 'axios';
import type { APIBudgetRow } from '../types/types';

const BASE_URL = "http://localhost:8080/api/v1/giving/";
const now = new Date();
const month = now.toLocaleDateString("default", { month: "numeric"});
const year = now.getFullYear();

export const getGivingByYearMonth = async () => {
    return await axios.get(`${BASE_URL}getGivingByYearMonth?year=${year}&month=${month}`);
}

export const setGiving = async (giving : APIBudgetRow) => {
    return await axios.post(`${BASE_URL}setGiving`, giving);
}