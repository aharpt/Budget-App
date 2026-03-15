import type { BudgetSectionTableRow } from "../types/types";

export function createData(
    name: string,
    planned: string,
    received: string,
    dateReceived: string,
) : BudgetSectionTableRow {
    return { name, planned, received, dateReceived };
}

export const spendingRows : BudgetSectionTableRow[] = [
    createData('Spending 1', "50.00", "50.00", "2026-02-01"),
    createData('Spending 2', "50.00", "50.00", "2026-02-15"),
];

export const debtRows : BudgetSectionTableRow[] = [
    createData('Debt 1', "50.00", "50.00", "2026-02-01"),
];