import { Accordion, AccordionSummary, Typography, AccordionDetails, Box, Button, Grid } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import type { JSX } from "react";
import BudgetSectionTable from "./BudgetSectionTable";

type BudgetSectionAccordionPropType = {
    title: string;
};

const BudgetSectionAccordion = ({ title }: BudgetSectionAccordionPropType): JSX.Element => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography component="span">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box>
                    <BudgetSectionTable />
                </Box>
                <Box sx={{ mt: "15px"}}>
                    <Grid container spacing={2}>
                        <Grid size={10} />
                        <Grid size={2} sx={{display: "flex"}}>
                            <Button variant="contained" sx={{marginLeft: "auto"}}>Add Item</Button>
                        </Grid>
                    </Grid>
                </Box>
            </AccordionDetails>
        </Accordion>
    );
}

export default BudgetSectionAccordion;