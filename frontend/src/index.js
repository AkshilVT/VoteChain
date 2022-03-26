import React from 'react';
import ReactDOM from 'react-dom';
import AdminPanel from './components/adminPanel/AdminPanel'
import UserPanel from './components/userPanel/UserPanel'
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";




import { Dapp } from './components/Dapp';
import Newindex from './Newindex';
import WalletCard from './WalletCard';

// This is the entry point of your application, but it just renders the Dapp
// react component. All of the logic is contained in it.

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserPanel />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
