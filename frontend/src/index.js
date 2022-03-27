import React from 'react';
import ReactDOM from 'react-dom';
import AdminPanel from './components/adminPanel/AdminPanel'
import UserPanel from './components/userPanel/UserPanel'
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";




import { Dapp } from './components/Dapp';
import Newindex from './Newindex';
import WalletCard from './WalletCard';
import Header from './components/Header';
import VotingCard from './components/votinglists/VotingCard';
import Navbar from './components/Navbar';
import NewVotingPage from './components/adminPanel/NewVotingPage';

// This is the entry point of your application, but it just renders the Dapp
// react component. All of the logic is contained in it.




const navstyle = {
  positon: "fixed",
  top: "80%",
  left: "50%",
  transform: "translate(-50%,-50%)"

}
ReactDOM.render(
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<UserPanel />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/admin/addEvent" element={<NewVotingPage />} />
    </Routes>
    {/* <Navbar style={navstyle}/> 
    Navbar should be in the end only */}
  </BrowserRouter>
  ,
  document.getElementById('root')
);
