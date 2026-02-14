import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

function createData(
    name: string,
    planned: string,
    received: string,
) {
    return { name, planned, received };
}

const rows = [
    createData('Income 1', "159.00", "159.00"),
    createData('Income 2', "159.00", "159.00"),
];

const BudgetSectionTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Planned&nbsp;($)</TableCell>
                        <TableCell align="right">Received&nbsp;($)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{"$" + row.planned}</TableCell>
                            <TableCell align="right">{"$" + row.received}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BudgetSectionTable;