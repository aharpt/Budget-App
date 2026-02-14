export type BudgetSectionTableRow = {
    name: string;
    planned: string;
    received: string;
};

export function createData(
    name: string,
    planned: string,
    received: string,
) : BudgetSectionTableRow {
    return { name, planned, received };
}

