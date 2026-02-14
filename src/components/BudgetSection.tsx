import { Box, Paper, Typography } from "@mui/material";
import type { JSX } from "react";
import BudgetSectionAccordion from "./BudgetSectionAccordion";
import { createData, type BudgetSectionTableRow } from "../utilities";

const incomeRows : BudgetSectionTableRow[] = [
    createData('Income 1', "159.00", "159.00"),
    createData('Income 2', "159.00", "159.00"),
];

const givingRows : BudgetSectionTableRow[] = [
    createData('Giving 1', "30.00", "30.00"),
    createData('Giving 2', "30.00", "30.00"),
];

const savingsRows : BudgetSectionTableRow[] = [
    createData('Saving 1', "100.00", "100.00"),
    createData('Saving 2', "100.00", "100.00"),
];

const billsSubscriptionsRows : BudgetSectionTableRow[] = [
    createData('Bills 1', "100.00", "100.00"),
    createData('Bills 2', "100.00", "100.00"),
];

const spendingRows : BudgetSectionTableRow[] = [
    createData('Spending 1', "50.00", "50.00"),
    createData('Spending 2', "50.00", "50.00"),
];

const debtRows : BudgetSectionTableRow[] = [
    createData('Debt 1', "50.00", "50.00"),
];

const BudgetSection = (): JSX.Element => {
    return (
        <>
            <Paper elevation={3} sx={{padding: "25px 15px 15px 15px"}}>
                <Typography component="h5" variant="h5" sx={{mb: "15px"}}>My Finances</Typography>
                <Box sx={{margin: "15px 0 15px 0"}}>
                    <BudgetSectionAccordion title="Income" rows={incomeRows} />
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