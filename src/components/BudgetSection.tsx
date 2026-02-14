import { Box, Paper, Typography } from "@mui/material";
import type { JSX } from "react";
import BudgetSectionAccordion from "./BudgetSectionAccordion";
import { createData, type BudgetSectionTableRow } from "../utilities";

const incomeRows : BudgetSectionTableRow[] = [
    createData('Income 1', "159.00", "159.00"),
    createData('Income 2', "159.00", "159.00"),
];

const expenseRows : BudgetSectionTableRow[] = [
    createData('Expense 1', "59.00", "59.00"),
    createData('Expense 2', "59.00", "59.00"),
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
                    <BudgetSectionAccordion title="Expenses" rows={expenseRows} />
                </Box>
            </Paper>
        </>
    );
}

export default BudgetSection;