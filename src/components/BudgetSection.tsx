import { Box, Paper, Typography } from "@mui/material";
import { type JSX } from "react";
import BudgetSectionAccordion from "./BudgetSectionAccordion";
import {
    givingRows,
    savingsRows,
    billsSubscriptionsRows,
    spendingRows,
    debtRows,
    type BudgetSectionTableRow,
    type APIIncomeRow,
} from "../utilities";
import {getIncomeByYearMonth} from "../apis/income";
import { useQuery } from "@tanstack/react-query";

async function fetchIncome() : Promise<BudgetSectionTableRow[]> {
        return new Promise((resolve) => {
            setTimeout(async () => {
                const data = (await getIncomeByYearMonth()).data;
                resolve(data.map((item : APIIncomeRow) => {
                    const newItem : BudgetSectionTableRow = {
                    name: item.title,
                    planned: item.plannedAmount,
                    received: item.remainingAmount,
                    dateReceived: item.year + "-" + item.month + "-" + item.day,
                };

                return newItem;
            }));
            }, 3000);
        })
    }

const BudgetSection = (): JSX.Element => {
    const query = useQuery({ queryKey: ['getIncome'], queryFn: fetchIncome });
    return (
        <>
            <Paper elevation={3} sx={{padding: "25px 15px 15px 15px"}}>
                <Typography component="h5" variant="h5" sx={{mb: "15px"}}>My Finances</Typography>
                <Box sx={{margin: "15px 0 15px 0"}}>
                    <BudgetSectionAccordion title="Income" rows={query.data || []} isLoading={query.isLoading || query.isFetching} />
                </Box>
                <Box sx={{margin: "15px 0 15px 0"}}>
                    <BudgetSectionAccordion title="Giving" rows={givingRows} isLoading={false} />
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