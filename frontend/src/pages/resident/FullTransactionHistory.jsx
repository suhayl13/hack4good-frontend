import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FullTransactionHistory.css';
import Button from './Button'; 

function TransactionHistory() {
  const navigate = useNavigate();
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

//   const[transactions, setTransactions] = useState([])



  return (
    <>
      <div className="Transaction-page">
        <h2 className="caption-preorder">Transaction History</h2>

        <div className="TableOfContents">
          <table border="1">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Transaction Details</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((trans) => (
                <tr key={trans.id}>
                  <td>{trans.id}</td>
                  <td>{trans.description}</td>
                  <td className={`amount-${trans.type}`}>
                    {trans.type === 'debit' ? '- ' : '+ '}
                    {trans.amount}
                    </td>
                </tr>
              ))}
              <tr>
                  <td colSpan = "2" className= " Balance-caption"> Balance: </td>
                  <td className= "Balance-amt"> *** Bal amt ***</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className= "back-button-container">
      <Button
        color= "#6c757d"
        text={"Back to Dashboard"}
        onClick={() => navigate('/resident/Dashboard')}
      />
      </div>
    </>
  );
}

export default TransactionHistory;
