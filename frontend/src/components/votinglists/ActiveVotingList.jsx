import React, { useEffect } from 'react';
import { useState } from 'react';
import { ethers } from 'ethers';
import Voting from '../../artifacts/contracts/voting.sol/Voting.json';
import env from "react-dotenv";

const votingAddress = "0x8C89350B159cbBa76f5Df1dC220B1e543740438F";
// console.log(env.TOKEN_ADDRESS, votingAddress);
export default function ActiveVotingList() {
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [TkAd, setTkAd] = useState("");
  useEffect(() => {
    displayActiveList()
    displayCompletedList()
  }, [])
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }
  async function displayActiveList() {
    if (typeof window.ethereum !== 'undefined') {
      const [account] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(votingAddress, Voting.abi, provider);
      const list = await contract.displayActiveList();
      console.log('List: ', list);
      const nameList = []
      for (const i in list) {
        const Data = await contract.getOne(list[i]);
        nameList.push(Data)
        console.log(Data)
      }
      setList(nameList)
    }
  }
  async function displayCompletedList() {
    if (typeof window.ethereum !== 'undefined') {
      const [account] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(votingAddress, Voting.abi, provider);
      const list = await contract.displayCompletedList();
      const nameList = []
      for (const i in list) {
        const Data = await contract.getOne(list[i]);
        nameList.push(Data)
        console.log(Data)
      }
      setList2(nameList)
      console.log('List Completed: ', list);
    }
  }
  async function addProposal() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(votingAddress, Voting.abi, signer);
      const setInformation = await contract.setInfo(name, desc, TkAd);
      await setInformation.wait();
      console.log("Success 1")
      displayActiveList()
      displayCompletedList()
      beginProposal(TkAd)
    }
  }
  async function beginProposal(TkAd) {
    await requestAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(votingAddress, Voting.abi, signer);
    const appendActive = await contract.startProposal(TkAd);
    await appendActive.wait();
    console.log("Success 2")
    displayActiveList()
  }
  async function endProposal(TkAd) {
    // console.log("Hello");
    await requestAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(votingAddress, Voting.abi, signer);
    // console.log("Hajah")
    const deleteActive = await contract.endProposal(TkAd);
    await deleteActive.wait();
    console.log("Success 3")
    displayActiveList()
    displayCompletedList()
  }
  return (
    <>
      <div className='w-full bg-black overflow-x-hidden mx-auto'>
        <div className='w-full  text-white space-y-2 container mx-auto m-5 pr-6 flex flex-col justify-center'>
          <h1 className='text-2xl text-center font-bold py-2'>Currently Active Voting Proposals</h1>
          <div className='flex justify-between px-6 text-[#0088dd] font-semibold py-2'>
            <p>Name</p>
          </div>
          {list.map((el, i) => {
            console.log("Entered");
            // Return the element. Also pass key     
            return (<div key={i} className='flex justify-between hover:shadow-md hover:shadow-white items-center border p-5 rounded-full'><p>{el.name}</p>
              <div className='space-x-5'>
                {/* <button className='bg-zinc-50 border p-2 rounded-sm' onClick={()=>{beginProposal(el.tokenAd);}}>Begin</button> */}
                <button className='bg-[#0088dd] rounded-lg  p-2 px-4' onClick={() => {console.log(el.tkA);

                endProposal(el.tkA)}}>End</button>
              </div>
            </div>)
          })}
        </div>
      </div>
      <div className='formBody'>

        <div className="form">
          <div className="title">New Voting Page</div>
          <div className="subtitle"></div>
          <div className="input-container ic1">
            <input id="lastname" className="input" type="text" placeholder=" " onChange={(e) => { setName(e.target.value) }} />
            <div className="cut" />
            <label htmlFor="firstname" className="placeholder">Name</label>
          </div>
          <div className="input-container ic2">
            <input id="email" className="input" type="text" placeholder=" " onChange={(e) => { setDesc(e.target.value) }} />
            <div className="cut" />
            <label htmlFor="lastname" className="placeholder">Brief Description (around 50 words)</label>
          </div>
          <div className="input-container ic2">
            <input id="email" className="input" type="text" placeholder=" " onChange={(e) => { setTkAd(e.target.value) }} />
            <div className="cut cut-short" />
            <label htmlFor="email" className="placeholder">Access Token
            </label></div>
          {/* <div className="input-container ic2">
            <div className="cut cut-short" />
            <label htmlFor="email" className="placeholder">Start and End Time
            <input id="firstname" className="input" type="text" placeholder=" " />
            </label>
          </div> */}
          <button type="text" className="submit" name="submit" onClick={() => addProposal()}>Submit</button>
          {/* <button type="text" className="submit" name="begin">Begin</button>
          <button type="text" className="submit" name="end">End</button> */}
          </div>
        </div>
        
      <div className='w-full bg-black overflow-x-hidden mx-auto'>
        <div className='w-full bg-black text-white space-y-2 container mx-auto m-5 pr-6 flex flex-col justify-center'>
          <h1 className='text-2xl text-center font-bold py-2'>Recently Completed Voting Proposals</h1>
          <div className='flex justify-between px-6 text-[#0088dd] font-semibold py-2'>
            <p>Name</p>
          </div>
          {list2.map((el, i) => {
            console.log("Entered");
            // Return the element. Also pass key     
            return (<div key={i} className='flex justify-between hover:shadow-md hover:shadow-white items-center border p-5 rounded-full'><p>{el.name}</p>
              <div className='space-x-5'>
                {/* <button className='bg-zinc-50 border p-2 rounded-sm' onClick={()=>{beginProposal(el.tokenAd);}}>Begin</button> */}
                {/* <button className='bg-[#0088dd] rounded-lg  p-2 px-4' onClick={() => {console.log(el.tkA);

                endProposal(el.tkA)}}>End</button> */}
              </div>
            </div>)
          })}
        </div>
        </div>
    </>
  );
}