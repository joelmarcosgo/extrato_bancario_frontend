import { GlobalStyle } from "./styles/global";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsProvider } from "./hooks/useTransactions";

export function App() {
  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header/>
      <Dashboard />
    </TransactionsProvider>
  );
}