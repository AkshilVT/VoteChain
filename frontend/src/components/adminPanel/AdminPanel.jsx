import React, { Component } from 'react';
import ActiveVotingList from '../votinglists/ActiveVotingList';
import PastVotingList from '../votinglists/PastVotingList';
import NewVotingPage from './NewVotingPage';
export default class AdminPanel extends Component {
  render() {
    return (
      <div> 
          <ActiveVotingList />
          <PastVotingList />
          <NewVotingPage />
      </div>
    )
  }
}
