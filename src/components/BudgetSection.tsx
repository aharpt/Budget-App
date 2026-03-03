import { Box, Paper, Typography } from "@mui/material";
import { type JSX } from "react";
import BudgetSectionAccordion from "./BudgetSectionAccordion";
import {
    savingsRows,
    billsSubscriptionsRows,
    spendingRows,
    debtRows,
} from "../utilities/utilities";
import {getIncomeByYearMonth} from "../apis/income";
import { useQuery } from "@tanstack/react-query";
import type { APIBudgetRow, BudgetSectionTableRow } from "../types/types";
import { getGivingByYearMonth } from "../apis/giving";

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

const BudgetSection = (): JSX.Element => {
    const incomeQuery = useQuery({ queryKey: ['getIncome'], queryFn: fetchIncome });
    const givingQuery = useQuery( { queryKey: ['getGiving'], queryFn: fetchGiving });

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
                    <BudgetSectionAccordion title="Savings" rows={savingsRows} isLoading={false} />
                </Box>
                <Box sx={{margin: "15px 0 15px 0"}}>
                    <BudgetSectionAccordion title="Bills & Subscriptions" rows={billsSubscriptionsRows} isLoading={false} />
                </Box>
                <Box sx={{margin: "15px 0 15px 0"}}>
                    <BudgetSectionAccordion title="Spending" rows={spendingRows} isLoading={false} />
                </Box>
                <Box sx={{margin: "15px 0 15px 0"}}>
                    <BudgetSectionAccordion title="Debt" rows={debtRows} isLoading={false} />
                </Box>
            </Paper>
        </>
    );
}

export default BudgetSection;