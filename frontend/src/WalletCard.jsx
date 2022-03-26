import React from 'react';
import { useState } from 'react';
import { ethers } from 'ethers';
// import logo from './logo.svg';

// import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json';
import Token from './artifacts/contracts/Token.sol/Token.json';

// const greeterAddress = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';
const tokenAddress = '0x65Ca354e0F74BDAf568dB412f1Ad70627e7f77FE';
function WalletCard() {
//   const [greeting, setGreetingValue] = useState('');
//   const [dataGreeting, setDataGreeting] = useState('');
  const [userAccount, setUserAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState('');

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }
  async function getBalance() {
    if (typeof window.ethereum !== 'undefined') {
      const [account] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(tokenAddress, Token.abi, provider);
      const accBalance = await contract.balanceOf(account);
      setBalance(accBalance.toString());
      console.log('Balance: ', accBalance.toString());
    }
  }

  async function sendCoins() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(tokenAddress, Token.abi, signer);
      const transation = await contract.transfer(userAccount, amount);
      await transation.wait();
      const [account] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const balance = await contract.balanceOf(account);
      setBalance(balance.toString());
      console.log(`${amount} Coins successfully sent to ${userAccount}`);
    }
  }

//   async function fetchGreeting() {
//     if (typeof window.ethereum !== 'undefined') {
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const contract = new ethers.Contract(
//         greeterAddress,
//         Greeter.abi,
//         provider
//       );
//       try {
//         const data = await contract.greet();
//         console.log('data: ', data);
//         setDataGreeting(data);
//       } catch (err) {
//         console.log('Error: ', err.data.message);
//       }
//     }
//   }

//   async function setGreeting() {
//     if (typeof window.ethereum !== 'undefined') {
//       await requestAccount();
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
//       const transaction = await contract.setGreeting(greeting);
//       setDataGreeting(greeting);
//       setGreetingValue('');
//       await transaction.wait();
//       fetchGreeting();
//     }
//   }

  return (
    <div className='App'>
      <header className='App-header'>
        {/* <h3>Current Greeting: {dataGreeting}</h3>
        <button onClick={fetchGreeting}>Fetch Greeting</button>
        <button onClick={setGreeting}>Set Greeting</button>
        <input
          onChange={(e) => setGreetingValue(e.target.value)}
          placeholder='Set greeting'
          value={greeting}
        /> */}
        <br />
        <h3>Current Balance: {balance}</h3>
        <button onClick={getBalance}>Get Balance</button>
        <button onClick={sendCoins}>Send Coins</button>
        <input
          onChange={(e) => setUserAccount(e.target.value)}
          placeholder='Account ID'
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          placeholder='Amount'
        />
      </header>
    </div>
  );
}

export default WalletCard;


































// import React, {useState} from 'react'
// import {ethers} from 'ethers'
// import './WalletCard.css'

// const WalletCard = () => {

// 	const [errorMessage, setErrorMessage] = useState(null);
// 	const [defaultAccount, setDefaultAccount] = useState(null);
// 	const [userBalance, setUserBalance] = useState(null);
// 	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

// 	const connectWalletHandler = () => {
// 		if (window.ethereum && window.ethereum.isMetaMask) {
// 			console.log('MetaMask Here!');

// 			window.ethereum.request({ method: 'eth_requestAccounts'})
// 			.then(result => {
// 				accountChangedHandler(result[0]);
// 				setConnButtonText('Wallet Connected');
// 				getAccountBalance(result[0]);
// 			})
// 			.catch(error => {
// 				setErrorMessage(error.message);
			
// 			});

// 		} else {
// 			console.log('Need to install MetaMask');
// 			setErrorMessage('Please install MetaMask browser extension to interact');
// 		}
// 	}

// 	// update account, will cause component re-render
// 	const accountChangedHandler = (newAccount) => {
// 		setDefaultAccount(newAccount);
// 		getAccountBalance(newAccount.toString());
// 	}

// 	const getAccountBalance = (account) => {
// 		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
// 		.then(balance => {
// 			setUserBalance(ethers.utils.formatEther(balance));
// 		})
// 		.catch(error => {
// 			setErrorMessage(error.message);
// 		});
// 	};

// 	const chainChangedHandler = () => {
// 		// reload the page to avoid any errors with chain change mid use of application
// 		window.location.reload();
// 	}


// 	// listen for account changes
// 	window.ethereum.on('accountsChanged', accountChangedHandler);

// 	window.ethereum.on('chainChanged', chainChangedHandler);
	
// 	return (
// 		<div className='walletCard'>
// 		<h4> {"Connection to MetaMask using window.ethereum methods"} </h4>
// 			<button onClick={connectWalletHandler}>{connButtonText}</button>
// 			<div className='accountDisplay'>
// 				<h3>Address: {defaultAccount}</h3>
// 			</div>
// 			<div className='balanceDisplay'>
// 				<h3>Balance: {userBalance}</h3>
// 			</div>
// 			{errorMessage}
// 		</div>
// 	);
// }

// export default WalletCard;