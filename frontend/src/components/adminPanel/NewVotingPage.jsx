import React, { Component } from 'react'
import '../css/newVotingPage.css';
export default class NewVotingPage extends Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }
  




  render() {
    return (
      <div className='formBody'>
        
        <div className="form">
          <div className="title">New Voting Page</div>
          <div className="subtitle"></div>
          <div className="input-container ic1">
            <input id="firstname" className="input" type="text" placeholder=" " />
            <div className="cut" />
            <label htmlFor="firstname" className="placeholder">Name</label>
          </div>
          <div className="input-container ic2">
            <input id="lastname" className="input" type="text" placeholder=" " />
            <div className="cut" />
            <label htmlFor="lastname" className="placeholder">Brief Description (around 50 words)</label>
          </div>
          <div className="input-container ic2">
            <input id="email" className="input" type="text" placeholder=" " />
            <div className="cut cut-short" />
            <label htmlFor="email" className="placeholder">Access Token
            </label></div>
          <div className="input-container ic2">
            <input id="email" className="input" type="text" placeholder=" " />
            <div className="cut cut-short" />
            <label htmlFor="email" className="placeholder">Start and End Time
            </label></div>
          <button type="text" className="submit" name="start">Submit</button>
        </div>

        
      </div>
    )
  }
}







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