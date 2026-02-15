import { Accordion, AccordionSummary, Typography, AccordionDetails, Box, Button, Grid, TextField } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState, type JSX } from "react";
import BudgetSectionTable from "./BudgetSectionTable";
import type { BudgetSectionTableRow } from "../utilities";

type BudgetSectionAccordionPropType = {
    title: string;
    rows: BudgetSectionTableRow[];
};

const BudgetSectionAccordion = ({ title, rows }: BudgetSectionAccordionPropType): JSX.Element => {
    const [name, setName] = useState("");
    const [planned, setPlanned] = useState("");
    const [received, setReceived] = useState("");
    const [showAddForm, setShowAddForm] = useState(false);

    const addItem = () : void => {
        
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
                    <Button variant="contained" size="medium" onClick={addItem}>Add</Button>
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
            </AccordionDetails>
        </Accordion>
    );
}

export default BudgetSectionAccordion;