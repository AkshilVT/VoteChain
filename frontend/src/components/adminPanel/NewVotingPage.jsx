import React, { Component,useState } from 'react'
import '../css/newVotingPage.css';
function NewVotingPage() {

  

  
    const [list, setList] = useState([]);
    const [list2, setList2] = useState([]);
    const  [name,setName] = useState("");
    const [desc,setDesc] = useState("");
    const[TkAd,setTkAd] = useState("");

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }
    return (
      <p>h</p>
    )
  
}

export default NewVotingPage;





// <form>
//           <label>
//             Name:
//             <input type="text" name="name" />
//           </label>
//           <label>
//             Description:
//             <input type="text" name="description" />
//           </label>
//           <label>
//             Start-Time:
//             <input type="text" name="start-time" />
//           </label>
//           <label>
//             End-Time:
//             <input type="text" name="end-time" />
//           </label>
//           <input type="submit" value="Submit" onClick={this.handleSubmit}/>
//         </form>