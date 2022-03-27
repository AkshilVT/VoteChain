import React from 'react';
import { useState } from 'react';
import { ethers } from 'ethers';

import Voting from './artifacts/contracts/voting.sol/Voting.json';

const votingAddress = '0x567bc2915BEeafF36c8f960e73AB790785c395ef';

function showDashboard() {
    const [list, setList] = useState([]);

    async function displayActiveList() {
        if (typeof window.ethereum !== 'undefined') {
            const [account] = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(votingAddress, Voting.abi, provider);
            const list = await contract.displayActiveList();
            setList(list)
            console.log('List: ', list);
        }
    }

    
}