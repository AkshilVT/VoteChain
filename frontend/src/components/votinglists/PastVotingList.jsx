import React, { Component } from 'react'
import VotingCard from './VotingCard';
import '../css/VotingList.css';
export default class PastVotingList extends Component {
  constructor(props){
    super(props);
    this.state = {
      votingList : [
        
      ]
    };
    this.setVotingList = this.setVotingList.bind(this);
  }

  setVotingList(votingList){
    this.setState({
      votingList: votingList
    });
  }
  async componentDidMount(){
    // const votingList = await fetch();
    // this.setVotingList(votingList);
    console.log("hi");

  }



  handleDelete(){
    
  }

  render() {
    return (
      <div className='votingListBody'>
        
        <article className="leaderboard">
          <header>
            
            <h1 className="leaderboard__title"><span className="leaderboard__title--top"> List of Past Voting Events</span></h1>
          </header>
          <main className="leaderboard__profiles">
            
            <article className="leaderboard__profile">
              <span className="leaderboard__name">Mark Zuckerberg</span>
              <span className="leaderboard__name">Date and Time</span>
              <span className="leaderboard__value">35.7<span>B</span></span>
              <button class="buttonDelete">
                <span class="button__text" onClick={}>
                  Delete
                </span>
              </button>
            </article>
            
          </main>
        </article>

      </div>
    )
  }
}
