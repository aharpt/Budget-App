import { Accordion, AccordionSummary, Typography, AccordionDetails, Box, Button, Grid, TextField } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, type JSX } from "react";
import BudgetSectionTable from "./BudgetSectionTable";
import Spinner from "./Spinner";
import { setIncome } from "../apis/income";
import { setGiving } from "../apis/giving";
import { setSavings } from "../apis/savings";
import { setSubscriptions } from "../apis/subscriptions";
import { setSpending } from "../apis/spending";
import { setDebt } from "../apis/debt";
import type { APIBudgetRow, BudgetSectionTableRow, FinancialSectionsType } from "../types/types";

type BudgetSectionAccordionPropType = {
    title: FinancialSectionsType;
    rows: BudgetSectionTableRow[];
    isLoading: boolean;
};

async function addIncome(incomeObject: APIBudgetRow) {
    return await setIncome(incomeObject);
}

async function addGiving(givingObject: APIBudgetRow) {
    return await setGiving(givingObject);
}

async function addSavings(savingsObject: APIBudgetRow) {
    return await setSavings(savingsObject);
}

async function addSubscription(subscriptionObject : APIBudgetRow) {
    return await setSubscriptions(subscriptionObject);
}

async function addSpending(spendingObject : APIBudgetRow) {
    return await setSpending(spendingObject);
}

async function addDebt(debtObject : APIBudgetRow) {
    return await setDebt(debtObject);
}

const BudgetSectionAccordion = ({ title, rows, isLoading }: BudgetSectionAccordionPropType): JSX.Element => {
    const [name, setName] = useState("");
    const [planned, setPlanned] = useState("");
    const [received, setReceived] = useState("");
    const [showAddForm, setShowAddForm] = useState(false);
    const queryClient = useQueryClient();
    const today = new Date();

    const budgetObject: APIBudgetRow = {
            title: name,
            plannedAmount: planned,
            receivedAmount: received,
            year: today.getFullYear(),
            month: (today.getMonth() + 1),
            day: today.getDate(),
        }

    const incomeMutation = useMutation({
        mutationFn: addIncome,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getIncome'] })
        },
    });

    const givingMutation = useMutation({
        mutationFn: addGiving,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getGiving'] })
        },
    });

    const savingsMutation = useMutation({
        mutationFn: addSavings,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getSavings'] })
        },
    });

    const subscriptionsMutation = useMutation({
        mutationFn: addSubscription,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getSubscriptions'] })
        },
    });

    const spendingMutation = useMutation({
        mutationFn: addSpending,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getSpending'] })
        },
    });

    const debtMutation = useMutation({
        mutationFn: addDebt,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getDebt'] })
        },
    });

    const addItem = (sectionType: FinancialSectionsType): void => {
        switch (sectionType) {
            case 'Income':
                incomeMutation.mutate(budgetObject);
                break;
            case 'Giving':
                givingMutation.mutate(budgetObject);
                break;
            case 'Savings':
                savingsMutation.mutate(budgetObject);
                break;
            case 'Bills & Subscriptions':
                subscriptionsMutation.mutate(budgetObject);
                break;
            case 'Spending':
                spendingMutation.mutate(budgetObject);
                break;
            case 'Debt':
                debtMutation.mutate(budgetObject);
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
                        <Spinner /> :
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