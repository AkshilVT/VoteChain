import React, { Component } from 'react'
import VotingCard from './VotingCard';

export default class ActiveVotingList extends Component {
  constructor(props){
    super(props);
    this.state = {
      votingList : []
    };
    this.setVotingList = this.setVotingList.bind(this);
  }

  setVotingList(votingList){
    this.setState({
      votingList: votingList
    });
  }
  async componentDidMount(){
    //const votingList = await fetch();
    //this.setVotingList(votingList);
    console.log("hi");
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}