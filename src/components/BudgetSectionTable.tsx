import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import type { BudgetSectionTableRow, FinancialSectionsType } from "../types/types";


type BudgetSectionTableProps = {
    rows: BudgetSectionTableRow[];
    type: FinancialSectionsType;
}

const BudgetSectionTable = ({rows, type} : BudgetSectionTableProps) => {

    const renderAmountTableCell = () => {
        switch (type) {
            case 'Income':
                return "Received";
            case 'Debt':
                return "Paid so Far";
            default:
                return "Remaining";
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Planned&nbsp;($)</TableCell>
                        <TableCell align="right">{renderAmountTableCell()}&nbsp;($)</TableCell>
                        <TableCell align="right">Date Received</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, idx) => (
                        <TableRow
                            key={row.name + "_" + idx}
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