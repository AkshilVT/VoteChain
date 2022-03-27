import React from 'react';
import ReactDOM from 'react-dom';
import { Dapp } from './components/Dapp';
import Newindex from './Newindex';
// We import bootstrap here, but you can remove if you want
import 'bootstrap/dist/css/bootstrap.css';
import WalletCard from './WalletCard';
// import './global.css';

// This is the entry point of your application, but it just renders the Dapp
// react component. All of the logic is contained in it.

ReactDOM.render(
  <React.StrictMode>
    <WalletCard />
  </React.StrictMode>,
  document.getElementById('root')
);
