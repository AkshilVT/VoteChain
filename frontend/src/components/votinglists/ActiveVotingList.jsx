import React, { Component } from 'react'
import VotingCard from './VotingCard';

export default class ActiveVotingList extends Component {
  constructor(props){
    super(props);
    this.state = [
      votingList = []
    ];
    this.setVotingList = this.setVotingList.bind(this);
  }

  setVotingList(votingList){
    this.setState({
      votingList: votingList
    });
  }
  async componentDidMount(){
    votingList = await fetch();
    this.setVotingList(votingList);
  }

  render() {
    return (
      <div>
        
        {
        this.votingList.map((element,i) => 
          <VotingCard details={element.details} id={i}/>
        )}
      </div>
    )
  }
}
