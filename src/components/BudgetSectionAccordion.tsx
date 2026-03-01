import { Accordion, AccordionSummary, Typography, AccordionDetails, Box, Button, Grid, TextField } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState, type JSX } from "react";
import BudgetSectionTable from "./BudgetSectionTable";
import {
    billsSubscriptionsRows,
    createData,
    debtRows,
    givingRows,
    incomeRows,
    savingsRows,
    spendingRows,
    type BudgetSectionTableRow,
    type FinancialSectionsType
} from "../utilities";

type BudgetSectionAccordionPropType = {
    title: FinancialSectionsType;
    rows: BudgetSectionTableRow[];
    isLoading: boolean;
};

const BudgetSectionAccordion = ({ title, rows, isLoading }: BudgetSectionAccordionPropType): JSX.Element => {
    const [name, setName] = useState("");
    const [planned, setPlanned] = useState("");
    const [received, setReceived] = useState("");
    const [showAddForm, setShowAddForm] = useState(false);

    const addItem = (sectionType: FinancialSectionsType): void => {
        const today = new Date();

        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        const dateReceived = `${year}-${month}-${day}`;
        switch (sectionType) {
            case 'Income':
                incomeRows.push(createData(name, planned, received, dateReceived));
                break;
            case 'Giving':
                givingRows.push(createData(name, planned, received, dateReceived));
                break;
            case 'Savings':
                savingsRows.push(createData(name, planned, received, dateReceived));
                break;
            case 'Bills & Subscriptions':
                billsSubscriptionsRows.push(createData(name, planned, received, dateReceived));
                break;
            case 'Spending':
                spendingRows.push(createData(name, planned, received, dateReceived));
                break;
            case 'Debt':
                debtRows.push(createData(name, planned, received, dateReceived));
                break;
            default:
                break;
        }

        setName("");
        setPlanned("");
        setReceived("");
        setShowAddForm(!showAddForm);
    }

    const renderAddForm = (): JSX.Element => {
        return (
            <Grid size={12}>
                <Box>
                    <TextField
                        id="outlined-name"
                        sx={{ mr: "15px" }}
                        size="small"
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    />
                    <TextField
                        id="outlined-planned"
                        sx={{ mr: "15px" }}
                        size="small"
                        label="Planned"
                        variant="outlined"
                        value={planned}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPlanned(e.target.value)}
                    />
                    <TextField
                        id="outlined-received"
                        sx={{ mr: "15px" }}
                        size="small"
                        label="Received"
                        variant="outlined"
                        value={received}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReceived(e.target.value)}
                    />
                    <Button variant="contained" size="medium" onClick={() => addItem(title)}>Add</Button>
                </Box>
            </Grid>
        );
    }

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
                {
                    isLoading ?
                        <p>Loading...</p> :
                        <>
                            <Box>
                                <BudgetSectionTable rows={rows} />
                            </Box>
                            <Box sx={{ mt: "15px" }}>
                                <Grid container spacing={2}>
                                    <Grid size={10} />
                                    <Grid size={2} sx={{ display: "flex" }}>
                                        <Button variant="contained" sx={{ marginLeft: "auto" }} onClick={() => setShowAddForm(!showAddForm)}>{showAddForm ? "Close" : "Add Item"}</Button>
                                    </Grid>
                                    {showAddForm ? renderAddForm() : <></>}
                                </Grid>
                            </Box>
                        </>
                }

            </AccordionDetails>
        </Accordion>
    );
}

export default BudgetSectionAccordion;