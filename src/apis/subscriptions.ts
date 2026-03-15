import axios from 'axios';
import type { APIBudgetRow } from '../types/types';

const BASE_URL = "http://localhost:8080/api/v1/subscriptions/";
const now = new Date();
const month = now.toLocaleDateString("default", { month: "numeric"});
const year = now.getFullYear();

export const getSubscriptionsByYearMonth = async () => {
    return await axios.get(`${BASE_URL}getSubscriptionsByYearMonth?year=${year}&month=${month}`);
}

export const setSubscriptions = async (subscription : APIBudgetRow) => {
    return await axios.post(`${BASE_URL}setSubscriptions`, subscription);
}