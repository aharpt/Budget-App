import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState, type JSX } from "react";
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

const BudgetSection = (): JSX.Element => {
    const [incomeData, setIncomeData] = useState<BudgetSectionTableRow[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data : Array<APIIncomeRow> = await getIncomeByYearMonth();

            data.forEach(item => {
                const newItem : BudgetSectionTableRow = {
                    name: item.title,
                    planned: item.plannedAmount,
                    received: item.remainingAmount,
                    dateReceived: item.year + "-" + item.month + "-" + item.day,
                };

                setIncomeData(data => [...data, newItem]);
            });
        }

        fetchData();
    }, []);

    return (
        <>
            <Paper elevation={3} sx={{padding: "25px 15px 15px 15px"}}>
                <Typography component="h5" variant="h5" sx={{mb: "15px"}}>My Finances</Typography>
                <Box sx={{margin: "15px 0 15px 0"}}>
                    <BudgetSectionAccordion title="Income" rows={incomeData || []} />
                </Box>
                <Box sx={{margin: "15px 0 15px 0"}}>
                    <BudgetSectionAccordion title="Giving" rows={givingRows} />
                </Box>
                <Box sx={{margin: "15px 0 15px 0"}}>
                    <BudgetSectionAccordion title="Savings" rows={savingsRows} />
                </Box>
                <Box sx={{margin: "15px 0 15px 0"}}>
                    <BudgetSectionAccordion title="Bills & Subscriptions" rows={billsSubscriptionsRows} />
                </Box>
                <Box sx={{margin: "15px 0 15px 0"}}>
                    <BudgetSectionAccordion title="Spending" rows={spendingRows} />
                </Box>
                <Box sx={{margin: "15px 0 15px 0"}}>
                    <BudgetSectionAccordion title="Debt" rows={debtRows} />
                </Box>
            </Paper>
        </>
    );
}

export default BudgetSection;