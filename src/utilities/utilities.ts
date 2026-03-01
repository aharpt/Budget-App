import type { BudgetSectionTableRow } from "../types/types";

export function createData(
    name: string,
    planned: string,
    received: string,
    dateReceived: string,
) : BudgetSectionTableRow {
    return { name, planned, received, dateReceived };
}

export const incomeRows : BudgetSectionTableRow[] = [
    createData('Income 1', "159.00", "159.00", "2026-02-01"),
    createData('Income 2', "159.00", "159.00", "2026-02-15"),
];

export const givingRows : BudgetSectionTableRow[] = [
    createData('Giving 1', "30.00", "30.00", "2026-02-01"),
    createData('Giving 2', "30.00", "30.00", "2026-02-15"),
];

export const savingsRows : BudgetSectionTableRow[] = [
    createData('Saving 1', "100.00", "100.00", "2026-02-01"),
    createData('Saving 2', "100.00", "100.00", "2026-02-15"),
];

export const billsSubscriptionsRows : BudgetSectionTableRow[] = [
    createData('Bills 1', "100.00", "100.00", "2026-02-01"),
    createData('Bills 2', "100.00", "100.00", "2026-02-15"),
];

export const spendingRows : BudgetSectionTableRow[] = [
    createData('Spending 1', "50.00", "50.00", "2026-02-01"),
    createData('Spending 2', "50.00", "50.00", "2026-02-15"),
];

export const debtRows : BudgetSectionTableRow[] = [
    createData('Debt 1', "50.00", "50.00", "2026-02-01"),
];