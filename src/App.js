import React from 'react';
import { Head } from './component/Head';
import { Balance } from './component/Balance';
import { Income } from './component/Income';
import { TransactionList } from './component/TransactionList';
import { AddTransaction } from './component/AddTransaction';

import { GlobalProvider } from './content/globalstate';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Head />
      <div className="container">
       <Balance />
        <Income />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;