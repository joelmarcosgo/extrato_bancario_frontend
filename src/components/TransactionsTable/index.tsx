import { useTransactions } from '../../hooks/useTransactions';

import {
    Container,
} from './styles';

export function TransactionsTable(){
    const { transactions } = useTransactions();

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Agência/Conta</th>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>
                                    {transaction.bank_agency_number}/
                                    {transaction.bank_account_number}
                                </td>
                                <td>{transaction.description}</td>
                                <td className={transaction.transaction_type}>
                                    {transaction.transaction_type === 'withdraw' || transaction.transaction_type === 'trasfer_from' ? '-' : ''}
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.transaction_category}</td>
                                <td>
                                    {new Intl.DateTimeFormat(
                                        'pt-BR',
                                        {
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: 'numeric',
                                            hour: 'numeric',
                                            minute: 'numeric',
                                            hourCycle: 'h23'
                                        }                                       
                                    ).format(new Date(transaction.created_at))}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    );
}