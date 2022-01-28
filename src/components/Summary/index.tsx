import depositImg from '../../assets/income.svg';
import withdrawImg from '../../assets/outcome.svg';
import transferImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import {
    Container,
} from './styles';

export function Summary(){
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.transaction_type === 'deposit') {
            acc.deposits += Number(transaction.amount);
        } else if (transaction.transaction_type === 'withdraw') {
            acc.withdraws += Number(transaction.amount);
        } else if (transaction.transaction_type === 'transfer_to' || transaction.transaction_type === 'transfer_from') {
            acc.transfers += Number(transaction.amount);
        }
        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        transfers: 0
    });

    return (
        <Container>
            <div>
                <header>
                    <p>Depósitos</p>
                    <img src={depositImg} alt="Depósitos" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saques</p>
                    <img src={withdrawImg} alt="Saques" />
                </header>
                <strong>
                    -{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Transferências</p>
                    <img src={transferImg} alt="Transferências" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.transfers)}
                </strong>
            </div>
        </Container>
    );
}