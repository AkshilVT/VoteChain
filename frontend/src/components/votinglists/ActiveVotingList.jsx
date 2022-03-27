import React, { useEffect } from 'react';
import { useState } from 'react';
import { ethers } from 'ethers';
import Voting from '../../artifacts/contracts/Voting.sol/Voting.json';



const votingAddress = '0x5267aCcD0de89a5D5Cc5f8363e93E77636072bB7';
export default function ActiveVotingList(){
const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const  [name,setName] = useState("");
 const [desc,setDesc] = useState("");
  const[TkAd,setTkAd] = useState("");
  useEffect(()=>{
    displayActiveList()
  },[])
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
      for(const i in list){
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
	  setList2(list)
      console.log('List: ', list);
    }
  }
  async function addProposal() {
	  if (typeof window.ethereum !== 'undefined') {
		  await requestAccount();
		  const provider = new ethers.providers.Web3Provider(window.ethereum);
		  const signer = provider.getSigner();
		  const contract = new ethers.Contract(votingAddress, Voting.abi, signer);
		  const setInformation = await contract.setInfo(name,desc,TkAd);
		  await setInformation.wait();
		  console.log("Success 1")
		  displayActiveList()
		  displayCompletedList()
      beginProposal(TkAd)
		}
}
async function beginProposal(TkAd){
	await requestAccount();
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const signer = provider.getSigner();
	const contract = new ethers.Contract(votingAddress, Voting.abi, signer);
	const appendActive = await contract.startProposal(TkAd);
	await appendActive.wait();
	console.log("Success 2")	
	displayActiveList()  
}
async function endProposal(TkAd){
	await requestAccount();
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const signer = provider.getSigner();
	const contract = new ethers.Contract(votingAddress, Voting.abi, signer);
	const deleteActive = await contract.endProposal(TkAd);
	await deleteActive.wait();
	console.log("Success 3")	  
	displayActiveList()
	displayCompletedList()  
  }
  return(
  <>
    <div className='w-full overflow-x-hidden max-w-screen-2xl container mx-auto'>
      <div className='w-full space-y-2 m-5 pr-6 flex flex-col justify-center'>
        <div className='flex justify-between'>
          <p>Name</p>
        </div>
        {list.map((el, i) => {     
           console.log("Entered");                 
           // Return the element. Also pass key     
           return (<div key={i} className='flex justify-between items-center'><p>{el.name}</p>
           <div className='space-x-5'>
             {/* <button className='bg-zinc-50 border p-2 rounded-sm' onClick={()=>{beginProposal(el.tokenAd);}}>Begin</button> */}
             <button className='bg-zinc-50 border p-2 rounded-sm'onClick={()=>endProposal(el.tokenAd)}>End</button>
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
            <input id="lastname" className="input" type="text" placeholder=" " onChange={(e) => {setName(e.target.value)}}/>
            <div className="cut" />
            <label htmlFor="firstname" className="placeholder">Name</label>
          </div>
          <div className="input-container ic2">
            <input id="email" className="input" type="text" placeholder=" " onChange={(e) => {setDesc(e.target.value)}}/>
            <div className="cut" />
            <label htmlFor="lastname" className="placeholder">Brief Description (around 50 words)</label>
          </div>
          <div className="input-container ic2">
            <input id="email" className="input" type="text" placeholder=" " onChange={(e) => {setTkAd(e.target.value)}}/>
            <div className="cut cut-short" />
            <label htmlFor="email" className="placeholder">Access Token
            </label></div>
          {/* <div className="input-container ic2">
            <div className="cut cut-short" />
            <label htmlFor="email" className="placeholder">Start and End Time
            <input id="firstname" className="input" type="text" placeholder=" " />
            </label>
            </div> */}
          <button type="text" className="submit" name="submit" onClick={()=>addProposal()}>Submit</button>
          {/* <button type="text" className="submit" name="begin">Begin</button>
          <button type="text" className="submit" name="end">End</button> */}
        </div>
        </div>
  </>
  );
}