import React, { useState } from 'react';
import './AnimatedWallet.css';

function AnimatedWallet() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  const transactions = [
    { id: 1, description: 'Transaction 1', amount: '20', type: 'credit' },
    { id: 2, description: 'Transaction 2', amount: '50', type: 'debit' },
    { id: 3, description: 'Transaction 3', amount: '100', type: 'credit' },
    { id: 4, description: 'Transaction 4', amount: '75', type: 'debit' },
    { id: 5, description: 'Transaction 5', amount: '40', type: 'credit' },
    { id: 6, description: 'Transaction 6', amount: '90', type: 'debit' },
    { id: 7, description: 'Transaction 7', amount: '60', type: 'credit' },
    { id: 8, description: 'Transaction 8', amount: '30', type: 'debit' },
    { id: 9, description: 'Transaction 9', amount: '120', type: 'credit' },
    { id: 10, description: 'Transaction 10', amount: '15', type: 'debit' },
  ];

  const lastThreeTransactions = transactions.slice(-3);

  return (
    <div className="wallet-container">
      {/* Wallet */}
      <div className="wallet" onClick={toggleDetails}>
        <span className="balance">Your Balance <br /><br />1,234 Points</span>
      </div>

      {/* Transaction History */}
      <div className={`details ${isOpen ? 'open' : ''}`}>
      <div className="TableOfContents-wallet">
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {lastThreeTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td
                    className={
                      transaction.type === 'credit'
                        ? 'amount-credit'
                        : 'amount-debit'
                    }
                  >
                    {transaction.type === 'credit' ? '+ ' : '- '}
                    ${transaction.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AnimatedWallet;
