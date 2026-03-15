import { Box, Paper, Typography } from "@mui/material";
import { type JSX } from "react";
import BudgetSectionAccordion from "./BudgetSectionAccordion";
import {
    debtRows,
} from "../utilities/utilities";
import {getIncomeByYearMonth} from "../apis/income";
import { getGivingByYearMonth } from "../apis/giving";
import { getSavingsByYearMonth } from "../apis/savings";
import { getSubscriptionsByYearMonth } from "../apis/subscriptions";
import { getSpendingByYearMonth } from "../apis/spending";
import { useQuery } from "@tanstack/react-query";
import type { APIBudgetRow, BudgetSectionTableRow } from "../types/types";

async function fetchIncome() : Promise<BudgetSectionTableRow[]> {
    return new Promise((resolve) => {
        setTimeout(async () => {
            const data = (await getIncomeByYearMonth()).data;
            resolve(data.map((item : APIBudgetRow) => {
                const newItem : BudgetSectionTableRow = {
                name: item.title,
                planned: item.plannedAmount,
                received: item.receivedAmount,
                dateReceived: 
                    String(item.year).padStart(4, "0") +
                    "-" + String(item.month).padStart(2, "0") +
                    "-" + String(item.day).padStart(2, "0"),
            };

            return newItem;
        }));
        }, 1000);
    })
}

async function fetchGiving() : Promise<BudgetSectionTableRow[]> {
    return new Promise((resolve) => {
        setTimeout(async () => {
            const data = (await getGivingByYearMonth()).data;
            resolve(data.map((item : APIBudgetRow) => {
                const newItem : BudgetSectionTableRow = {
                name: item.title,
                planned: item.plannedAmount,
                received: item.receivedAmount,
                dateReceived: 
                    String(item.year).padStart(4, "0") +
                    "-" + String(item.month).padStart(2, "0") +
                    "-" + String(item.day).padStart(2, "0"),
            };

            return newItem;
        }));
        }, 1000);
    })
}

async function fetchSavings() : Promise<BudgetSectionTableRow[]> {
    return new Promise((resolve) => {
        setTimeout(async () => {
            const data = (await getSavingsByYearMonth()).data;
            resolve(data.map((item : APIBudgetRow) => {
                const newItem : BudgetSectionTableRow = {
                name: item.title,
                planned: item.plannedAmount,
                received: item.receivedAmount,
                dateReceived: 
                    String(item.year).padStart(4, "0") +
                    "-" + String(item.month).padStart(2, "0") +
                    "-" + String(item.day).padStart(2, "0"),
            };

            return newItem;
        }));
        }, 1000);
    })
}

async function fetchSubscriptions() : Promise<BudgetSectionTableRow[]> {
    return new Promise((resolve) => {
        setTimeout(async () => {
            const data = (await getSubscriptionsByYearMonth()).data;
            resolve(data.map((item : APIBudgetRow) => {
                const newItem : BudgetSectionTableRow = {
                name: item.title,
                planned: item.plannedAmount,
                received: item.receivedAmount,
                dateReceived: 
                    String(item.year).padStart(4, "0") +
                    "-" + String(item.month).padStart(2, "0") +
                    "-" + String(item.day).padStart(2, "0"),
            };

            return newItem;
        }));
        }, 1000);
    })
}

async function fetchSpending() : Promise<BudgetSectionTableRow[]> {
    return new Promise((resolve) => {
        setTimeout(async () => {
            const data = (await getSpendingByYearMonth()).data;
            resolve(data.map((item : APIBudgetRow) => {
                const newItem : BudgetSectionTableRow = {
                name: item.title,
                planned: item.plannedAmount,
                received: item.receivedAmount,
                dateReceived: 
                    String(item.year).padStart(4, "0") +
                    "-" + String(item.month).padStart(2, "0") +
                    "-" + String(item.day).padStart(2, "0"),
            };

            return newItem;
        }));
        }, 1000);
    })
}

const BudgetSection = (): JSX.Element => {
    const incomeQuery = useQuery({ queryKey: ['getIncome'], queryFn: fetchIncome });
    const givingQuery = useQuery( { queryKey: ['getGiving'], queryFn: fetchGiving });
    const savingsQuery = useQuery( { queryKey: ['getSavings'], queryFn: fetchSavings });
    const subscriptionsQuery = useQuery( { queryKey: ['getSubscriptions'], queryFn: fetchSubscriptions });
    const spendingQuery = useQuery( { queryKey: ['getSpending'], queryFn: fetchSpending });

    return (
        <>
            <Paper elevation={3} sx={{padding: "25px 15px 15px 15px"}}>
                <Typography component="h5" variant="h5" sx={{mb: "15px"}}>My Finances</Typography>
                <Box sx={{margin: "15px 0 15px 0"}}>
                    <BudgetSectionAccordion title="Income" rows={incomeQuery.data || []} isLoading={incomeQuery.isLoading || incomeQuery.isFetching} />
                </Box>
                <Box sx={{margin: "15px 0 15px 0"}}>
                    <BudgetSectionAccordion title="Giving" rows={givingQuery.data || []} isLoading={givingQuery.isLoading || givingQuery.isFetching} />
                </Box>
                <Box sx={{margin: "15px 0 15px 0"}}>
                    <BudgetSectionAccordion title="Savings" rows={savingsQuery.data || []} isLoading={savingsQuery.isLoading || savingsQuery.isFetching} />
                </Box>
                <Box sx={{margin: "15px 0 15px 0"}}>
                    <BudgetSectionAccordion title="Bills & Subscriptions" rows={subscriptionsQuery.data || []} isLoading={subscriptionsQuery.isLoading || subscriptionsQuery.isFetching} />
                </Box>
                <Box sx={{margin: "15px 0 15px 0"}}>
                    <BudgetSectionAccordion title="Spending" rows={spendingQuery.data || []} isLoading={spendingQuery.isLoading || spendingQuery.isFetching} />
                </Box>
                <Box sx={{margin: "15px 0 15px 0"}}>
                    <BudgetSectionAccordion title="Debt" rows={debtRows} isLoading={false} />
                </Box>
            </Paper>
        </>
    );
}

export default BudgetSection;