export type BudgetSectionTableRow = {
    name: string;
    planned: string;
    received: string;
    dateReceived: string;
};

export type APIIncomeRow = {
    title: string;
    plannedAmount: string;
    receivedAmount: string;
    year: number;
    month: number;
    day: number;
};

export type FinancialSectionsType =
    "Income"                |
    "Giving"                |
    "Savings"               |
    "Bills & Subscriptions" |
    "Spending"              |
    "Debt";