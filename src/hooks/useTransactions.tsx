import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface TransactionData {
    id: string;
    description: string;
    transaction_type: string;
    transaction_category: string;
    amount: number;
    created_at: string;
    bank_account_number: string;
    bank_agency_number: string;
    owner_name: string;
    owner_cpf: string;
    previous_balance: number;
    current_balance: number;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: TransactionData[];
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<TransactionData[]>([]);

    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransactions(response.data.results))
    },[transactions])

    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    );
}

function useTransactions() {
    const context = useContext(TransactionsContext);
    return context;
}

export { useTransactions, TransactionsProvider };