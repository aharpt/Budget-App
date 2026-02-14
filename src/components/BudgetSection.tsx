import { Box, Paper, Typography } from "@mui/material";
import type { JSX } from "react";
import BudgetSectionAccordion from "./BudgetSectionAccordion";

const BudgetSection = (): JSX.Element => {
    return (
        <>
            <Paper elevation={3} sx={{padding: "25px 15px 15px 15px"}}>
                <Typography component="h5" variant="h5" sx={{mb: "15px"}}>My Finances</Typography>
                <Box sx={{margin: "15px 0 15px 0"}}>
                    <BudgetSectionAccordion title="Income" />
                </Box>
                <Box sx={{margin: "15px 0 15px 0"}}>
                    <BudgetSectionAccordion title="Expenses" />
                </Box>
            </Paper>
        </>
    );
}

export default BudgetSection;