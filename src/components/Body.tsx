import { Container } from "@mui/material";
import type { JSX } from "react";
import BudgetSection from "./BudgetSection";

const Body = () : JSX.Element => {
    return (
        <Container maxWidth="xl" sx={{marginTop: '15px'}}>
            <BudgetSection />
        </Container>
    );
}

export default Body;