export type BudgetSectionTableRow = {
    name: string;
    planned: string;
    received: string;
    dateReceived: string;
};

export function createData(
    name: string,
    planned: string,
    received: string,
    dateReceived: string,
) : BudgetSectionTableRow {
    return { name, planned, received, dateReceived };
}

