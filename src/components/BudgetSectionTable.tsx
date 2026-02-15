import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import type { BudgetSectionTableRow } from "../utilities";


type BudgetSectionTableProps = {
    rows: BudgetSectionTableRow[];
}

const BudgetSectionTable = ({rows} : BudgetSectionTableProps) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Planned&nbsp;($)</TableCell>
                        <TableCell align="right">Received&nbsp;($)</TableCell>
                        <TableCell align="right">Date Received</TableCell>
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
                            <TableCell align="right">{row.dateReceived}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BudgetSectionTable;