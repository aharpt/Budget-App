import { Divider, Typography } from "@mui/material";
import { type JSX } from "react";

const Header = () : JSX.Element => {
    const renderDate = () : string => {
        const now = new Date();
        const month = now.toLocaleDateString("default", { month: "long"});
        const year = now.getFullYear();

        return month + ", " + year;
    }

    return (
        <>
            <Typography component="h4" variant="h4" sx={{padding: '0 25px 5px 25px'}}>{renderDate()}</Typography>
            <Divider />
        </>
    );
}

export default Header;