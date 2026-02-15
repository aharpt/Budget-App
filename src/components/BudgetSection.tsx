import { Box, Paper, Typography } from "@mui/material";
import type { JSX } from "react";
import BudgetSectionAccordion from "./BudgetSectionAccordion";
import { createData, type BudgetSectionTableRow } from "../utilities";

const incomeRows : BudgetSectionTableRow[] = [
    createData('Income 1', "159.00", "159.00", "2026-02-01"),
    createData('Income 2', "159.00", "159.00", "2026-02-15"),
];

const givingRows : BudgetSectionTableRow[] = [
    createData('Giving 1', "30.00", "30.00", "2026-02-01"),
    createData('Giving 2', "30.00", "30.00", "2026-02-15"),
];

const savingsRows : BudgetSectionTableRow[] = [
    createData('Saving 1', "100.00", "100.00", "2026-02-01"),
    createData('Saving 2', "100.00", "100.00", "2026-02-15"),
];

const billsSubscriptionsRows : BudgetSectionTableRow[] = [
    createData('Bills 1', "100.00", "100.00", "2026-02-01"),
    createData('Bills 2', "100.00", "100.00", "2026-02-15"),
];

const spendingRows : BudgetSectionTableRow[] = [
    createData('Spending 1', "50.00", "50.00", "2026-02-01"),
    createData('Spending 2', "50.00", "50.00", "2026-02-15"),
];

const debtRows : BudgetSectionTableRow[] = [
    createData('Debt 1', "50.00", "50.00", "2026-02-01"),
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